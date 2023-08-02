
/**
 *
 * @name:  godoDb
 * @author: ruitao  
 * @email: xpbb@qq.com
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
const Util = require('./util.js');
module.exports = class extends Util { 
  async __before() {
    this.adminId = await this.ses("adminId")
  }
  indexAction() {
    if(!this.adminId) {
      return this.redirect('/static/login.html')
    }else{
      return this.redirect('/static/index.html')
    }
  }
  welcomeAction() {
    if(!this.adminId) {
      return this.fail('not login!')
    }

  }
  
};
