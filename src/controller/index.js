
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
  async welcomeAction() {
    if(!this.adminId) {
      return this.fail('not login!')
    }
    let dbNum = await this.model('database').count();
    let userNum = await this.model('admin').count();
    let opNum = await this.model('adminlog').count();
    let loginNum = await this.model('admin').where({admin_id : this.adminId}).getField("login_num", true);
    let oplist = await this.model('adminlog').limit(10).order("addtime desc").select();
    let userlist = await this.model('admin').field('username, admin_id').select();
    let users = {};
    userlist.forEach(d => {
      users[d.admin_id] = d.username;
    })
    oplist.forEach(d => {
      d.username = users[d.admin_id]
    })
    return this.success({dbNum, userNum, opNum, loginNum, oplist})
    

  }
  
};
