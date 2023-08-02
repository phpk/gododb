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
 * @apiDefine menu 日志管理
 */
module.exports = class extends Base {
    /**
    * @api {get} logs/list 日志列表
    * @apiGroup logs
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

        // let list = await this.model('adminlog')
        //     .where(wsql)
        //     .page(page, limit)
        //     .select();
        // let count = await think.model('adminlog').where(wsql).count();
        let list = await this.model('adminlog')
            .alias('l')
            .field('l.*,u.admin_id,u.username')
            .join({
                table: 'admin',
                join: 'left',
                as: 'u',
                on: ['admin_id', 'admin_id']
            })
            .where(wsql)
            .page(page, limit)
            .order("l.addtime desc")
            .select();
        let count = await this.model('adminlog')
            .alias('l')
            .field('l.*,u.admin_id,u.name')
            .join({
                table: 'admin',
                join: 'left',
                as: 'u',
                on: ['admin_id', 'admin_id']
            })
            .where(wsql).count();
        return this.success({ list, count })
    }
}