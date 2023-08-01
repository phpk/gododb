
/**
 *
 * @name:  godoDb
 * @author: ruitao
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
const jwt = require('jsonwebtoken');

/**
 * @class 
 * @apiDefine login 用户登录
 */
const Util = require('./util.js');
module.exports = class extends Util {   
    async captchaAction() {
		let captchaData = await this.service('login').getCaptcha();
        await this.ses('captchaId', captchaData.text);
		//this.header('Content-Type', 'image/svg+xml');
        //this.ctx.body = captchaData.data;
        return this.success({svg : captchaData.data});
	}
    async chkCapcha(code) {
        let captchaId = await this.ses('captchaId');
        //清空
        if (captchaId != code) {
            return false;
        }
        await this.ses('captchaId', null);
        return true;
    }
    async loginInAction() {
        let post = this.post();
        
        if (!await this.chkCapcha(post.captcha)) {
            return this.fail('验证码错误');
        }
        //杜绝用户反复查表
        let loginNum = await this.ses('loginNum');
        loginNum = loginNum ? loginNum : 0;
        if (loginNum > 10) {
            return this.fail('登录错误次数太多，大侠请留步，请一小时后再试!');
        }
        let admin = await this.model('admin').where({
            username: post.username
        }).find();
        let adminId = admin.admin_id;
        if (think.isEmpty(admin)) {
            await this.ses('loginNum', loginNum + 1);
            return this.fail('用户不存在');
        }
        if (admin.status != 0) {
            await this.ses('loginNum', loginNum + 1);
            return this.fail('用户被禁用');
        }
        let pwd = this.service('login').createPassword(post.password, admin.salt);
        //console.log(pwd)
        if (pwd != admin.password) {
            await this.ses('loginNum', loginNum + 1);
            return this.fail('密码错误');
        }
        //生成一个16位的随机数
        let salt = this.service('login').randomString(),
            md5Salt = think.md5(salt);
        let token = jwt.sign({
            adminId: adminId
        }, md5Salt, {
            expiresIn: 60 * 60 * 24 //24小时过期
            //expiresIn:-1//永不过期
        });

        let password = this.service('login').createPassword(post.password, salt);
        //更新用户密码和登录状态
        await this.model('admin')
            .where({
                admin_id: adminId
            })
            .update({
                password,
                salt,
                login_num: admin.login_num + 1,
                login_time: this.now()
            })
        //添加缓存
        await this.ses('adminId', adminId);
        //jwt校验用
        await this.ses('salt', md5Salt);
        //设定保活
        await this.ses('statusTime', this.now());
        //设置权限
        let authData = await this.model('menu').cacheData(admin)
        //添加登录日志
        delete post.password;
        let logData = {
            admin_id: adminId,
            log: admin.username + '用户登录',
            data: JSON.stringify(post),
            ip: this.ctx.ip,
            agent: this.ctx.userAgent,
            url: this.ctx.path,
            method: this.ctx.method,
            addtime: this.now(),
            type : 'admin_login'
        };
        //await this.mg('adminlog').add(logData);
        await this.model('adminlog').add(logData);
        return this.success({token, menus : authData.menus});
    }
    async loginOutAction() {
        await this.clearSatus();
        return this.success()
    }
}