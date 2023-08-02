/**
 *
 * @name:  godoDb
 * @author: ruitao  
 * @email: xpbb@qq.com
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
const Base = require('./base.js');

/**
 * @class
 * @apiDefine admin 管理员管理
 */
module.exports = class extends Base {
    /**
    * @api {get} admin/list 管理员列表
    * @apiGroup admin
    *
    * @apiHeader {string} rttoken 必填
    *
    * @apiParam  {number} page 页码
    * @apiParam  {number} page 每页显示数据
    *
    * @apiSuccess (200) {type} name description
    *
    */
    async listAction() {
        let { page, limit, param } = this.get();
        let wsql = {};
        if (param) wsql = this.parseSearch(param, wsql);

        let list = await this.model('admin')
            .where(wsql)
            .page(page, limit)
            .select();
        let count = await think.model('admin').where(wsql).count();
        return this.success({ list, count })
    }
    /**
    * @api {get} admin/addBefore 添加管理员前
    * @apiGroup admin
    *
    * @apiHeader {string} rttoken 必填
    *
    * @apiParam  null
    *
    * @apiSuccess (200) {type} name description
    *
    */
    async addBeforeAction() {
        let authList = await this.model('admin_auth').select()
        authList.forEach(e => {
            e.title = e.name
        })
        return this.success(authList)
    }
    /**
   * @api {post} admin/add 添加管理员
   * @apiGroup admin
   *
   * @apiHeader {string} rttoken 必填
   *
   * @apiParam  {string} username 用户名
   * @apiParam {string} password 密码
   * @apiParam {string} name 真实姓名
   * @apiParam {Number} mobile 手机号
   * @apiParam {Number} status 状态
   *
   * @apiSuccess (200) {type} name description
   *
   */
    async addAction() {
        let save = this.post()
        let has = await this.model('admin')
            .where(`username = '${save.username}' or mobile = '${save.mobile}'`)
            .find()
        if (!think.isEmpty(has)) return this.fail('系统中存在相同的用户名或手机号')
        save.salt = this.service('login').randomString()
        save.password = this.service('login').createPassword(save.password, save.salt);
        save.add_time = this.now();
        save.rules = await this.model('admin_auth').where({id : save.auth_id}).getField("rules", true);
        if (think.isEmpty(save.rules)) {
            return this.fail('请选择角色')
        }
        await this.model('admin').add(save);
        await this.adminOpLog('添加管理员', ['password']);
        return this.success()

    }
    /**
        * @api {get} admin/editBefore 编辑管理员前
        * @apiGroup admin
        *
        * @apiHeader {string} rttoken 必填
        *
        * @apiParam  {number} id 管理员id
        *
        * @apiSuccess (200) {type} name description
        *
        */
    async editBeforeAction() {
        let admin_id = this.get('id');

        let data = await this.model('admin').where({ admin_id }).find();
        if (think.isEmpty(data)) return this.fail('data is none');

        delete data.password;
        delete data.salt;
        data.authList = await this.model('admin_auth').select()
        data.authList.forEach(e => {
            e.title = e.name
            if(e.rules == data.rules) {
                data.auth_id = e.id;
                data.auth_name = e.name;
            }
        });
        return this.success(data)
    }
    /**
      * @api {post} admin/edit 编辑管理员
      * @apiGroup admin
      *
      * @apiHeader {string} rttoken 必填
      * 
      * @apiParam  {Number} admin_id 管理员id
      * @apiParam  {string} username 用户名
      * @apiParam {string} password 密码
      * @apiParam {string} name 真实姓名
      * @apiParam {Number} mobile 手机号
      * @apiParam {Number} status 状态
      *
      * @apiSuccess (200) {type} name description
      *
      */
    async editAction() {
        let save = this.post(),
            admin_id = save.admin_id;
        
        if (save.password != '') {
            save.salt = this.service('login').randomString()
            save.password = this.service('login').createPassword(save.password, save.salt);
            save.update_time = this.now()
        }
        //判断是否存在该管理员
        if (!await this.hasData('admin', { admin_id }))
            return this.fail("数据不存在");

        //判断用户名或手机号
        let has = await this.model('admin')
            .where(`(username = '${save.username}' or mobile = '${save.mobile}') and admin_id != '${admin_id}'`)
            .find()
        if (!think.isEmpty(has)) return this.fail('系统中存在相同的用户名或手机号')
        save.rules = await this.model('admin_auth').where({id : save.auth_id}).getField("rules", true);
        if (think.isEmpty(save.rules)) {
            return this.fail('请选择角色')
        }
        await this.model('admin')
                .where({ admin_id })
                .update(save);
        await this.adminOpLog('编辑管理员', ['password']);
        return this.success()

    }
    /**
     * @api {post} admin/del 删除管理员
     * @apiGroup admin
     *
     * @apiHeader {string} rttoken 必填
     *
     * @apiParam  {number} id
     *
     * @apiSuccess (200) {type} name description
     *
     */
    async delAction() {
        let admin_id = this.post('admin_id');

        if (!await this.hasData('admin', { admin_id }))
            return this.fail("数据不存在");
        
        await this.model('admin').where({ admin_id }).delete();
        await this.adminOpLog('删除管理员');
        return this.success()
    }
    /**
     * @api {post} admin/enable 设置管理员是否可用
     * @apiGroup admin
     *
     * @apiHeader {string} rttoken 必填
     *
     * @apiParam  {number} status 状态
     * @apiParam  {number} id
     * 
     * @apiSuccess (200) {type} name description
     *
     */
    async enableAction() {
        let post = this.post(),
            admin_id = post.id;
        if (!await this.hasData('admin', { admin_id }))
            return this.fail("数据不存在");

        let rt = await this.model('admin')
            .where({ admin_id })
            .update({
                status: post.status
            })
        await this.adminOpLog('设置管理员可用');
        return this.success(rt)
    }
    async loginOutAction() {
        await this.session(null);
        await this.cache('admin_' + this.adminId, null);
        await this.session('adminId', null);
        await this.session('salt', null);
        await this.session('statusTime', null);
        return this.success()
    }
};
