/**
 *
 * @name:  godoDb
 * @author: ruitao
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
const jwt = require('jsonwebtoken');
const Util = require('./util.js')
/**
 * @class 基础类
 */
module.exports = class extends Util {
  constructor(ctx) {
    super(ctx);
    this.adminId = 0;
  }
  async __before() {
    //token校验
    if (!await this.checkToken()) return false;
    //权限验证
    if (!await this.checkAuth()) return false;
    //判断保活
    if (!await this.checkStatusTime()) return false;
  }
  /**
   * 权限校验
   * @returns boolean 
   */
  async checkAuth() {
    let url = `${this.ctx.controller}/${this.ctx.action}`;
    //console.log(url)
    if (this.ctx.module) {
      url = this.ctx.module + '/' + url;
    }
    if (this.ctx.pluginName) {
      url = this.ctx.pluginName + '/' + url;
    }
    //console.log(url)
    console.log(this.adminId)
    let authData = await this.cache('perms_' + this.adminId);
    console.log(authData)
    if (!authData.perms.includes(url)) {
      this.status = 400;
      this.ctx.body = {
        code: 400,
        message: 'auth error!'
      };
      return false;
    }
    return true;
  }
  /**
   * token校验
   * @returns boolean
   */
  async checkToken() {
    let headers = this.ctx.headers;
    //console.log(headers)
    if (!headers.rttoken || headers.rttoken == 'undefined') {
      this.status = 401;
      this.ctx.body = {
        code: 401,
        message: 'token none!'
      };
      return false;
    }
    //token验证
    let jwtChk = await this.chkJwt(headers.rttoken);
    if (jwtChk.code != 0) {
      this.status = 402;
      this.ctx.body = jwtChk;
      return false;
    }

    return true;
  }
  /**
   * 判断保活
   * @returns boolean
   */
  async checkStatusTime() {
    let preTime = await this.ses('statusTime'),
      configTime = this.config('statusTime');
    //过期
    if (!preTime || this.now() - preTime > configTime) {
      await this.ses('statusTime', null);
      this.status = 406;
      this.ctx.body = {
        code: 406,
        message: '超过保活时间!'
      };
      return false;
    } else {
      //没过期则加时间
      await this.ses('statusTime', this.now() + configTime)
      return true;
    }
  }
  /**
   * 校验jwt
   * @param {*} token 
   * @returns object
   */
  async chkJwt(token) {
    let salt = await this.ses('salt'),
      adminId = await this.ses('adminId');
    if (!salt || !adminId) {
      return {
        code: 4021,
        message: 'ses 不存在'
      };
    }
    
    //校验
    try {
      let rt = await jwt.verify(token, salt);
      //过期
      if (rt.adminId != adminId) {
        await this.clearSatus(adminId);
        await this.cache('admin_' + adminId, null);
        return {
          code: 4023,
          message: '认证过期'
        };
      }
      this.adminId = adminId;
      return {
        code: 0
      };
    } catch (e) {
      return {
        code: 4024,
        message: e.message
      };
    }

  }
  
  /**
   * 记录操作日志
   * @param {string} msg 
   * @param {array} out 
   */
  async adminOpLog(msg, out = []) {
    try {
      let postData = this.post();
      //删除敏感字段
      if (out.length > 0) {
        out.forEach(e => {
          delete postData[e];
        })
      }
      let saveData = {
        admin_id: this.adminId,
        log: msg,
        data: JSON.stringify(postData),
        ip: this.ctx.ip,
        agent: this.ctx.userAgent,
        url: this.ctx.path,
        method: this.ctx.method,
        addtime: this.now(),
        type : 'admin_op'
      };
      await this.mg('adminlog').add(saveData);
    } catch (error) {
      console.log(error)
    }

  }

  /**
   * 判断是否有数据
   * @param {string} tableName 
   * @param {object} sql 
   * @returns 
   */

  async hasData(tableName, sql) {
    let has = await this.model(tableName).where(sql).find();
    //console.log(has)
    if (!think.isEmpty(has)) {
      return true;
    }
    return false;
  }
  __after() {

  }
};
