/**
 *
 * @name:  godoDb
 * @author: ruitao  
 * @email: xpbb@qq.com
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
const svgCaptcha = require("svg-captcha");
module.exports = class extends think.Service {
    randomString(len = 16) {
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
            maxPos = $chars.length,
            pwd = '',
            i = 0;
        for (; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    async getCaptcha() {
        let option = {
            mathMin: 1,
            mathMax: 30,
            mathOperator: "+",
            noise: 1, // 干扰线条的数量
            color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
            background: '#eeeeee' // 验证码图片背景颜色
        };
        const captcha = svgCaptcha.createMathExpr(option);
        return captcha;
    }
    //创建密码
    createPassword(password, salt = '') {
        if (!salt) salt = this.randomString()
        return think.md5(think.md5(password) + salt);
    }
    //校验密码
    checkPassword(ckpwd, password, salt) {
        let xpassword = this.createPassword(ckpwd, salt);
        if (xpassword == password) {
            return true;
        }
        return false;
    }



}