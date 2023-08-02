/**
 *
 * @name:  godoDb
 * @author: ruitao  
 * @email: xpbb@qq.com
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
module.exports = class extends think.Model {
    /**
     * 获取列表
     * @param {Number} adminId 
     * @returns 
     */
    async list(user) {
        //let sql = { is_sys: 1 };
        let sql = {};
        if (user.rules != -1) {
            sql.id = ['IN', user.rules]
        }
        let data = await think.model('menu')
            .where(sql)
            .order('order_num asc')
            .select();
        // let commonData = await this.model('menu')
        //     .where({ is_common: 1 })
        //     .select()
        // commonData.forEach(d => {
        //     data.push(d)
        // })

        //获取路由权限
        let perms = [];
        data.forEach(el => {
            if (el.href) {
                el.href = '/static/res/' + el.href;
            }
            el.name = el.title;
            el.route && perms.push(el.route);
        });
        //console.log(perms)
        //根据 id取出某一个分类的子集
        const findById = (id) => {
            let child = [];
            data.forEach((value) => {
                //前台是否显示
                
                if (value.pid == id && value.ifshow < 1) {

                    child.push(value);
                }
            });
            return child;
        };
        // 递归查询到数据并将数据存储到数组 
        const deeploop = function (id) {
            let dataArr = findById(id);
            if (dataArr.length <= 0) {
                return null;
            } else {
                dataArr.forEach((value) => {
                    if (deeploop(value.id) != null) {
                        value["children"] = deeploop(value.id);
                    }
                });
            }
            return dataArr;
        };
        let menus = deeploop(0);

        return { perms, menus };
    }
    /**
     * 设置缓存
     * @param {Number} adminId 
     */
    async cacheData(user) {
        //设置路由缓存
        let routeData = await this.list(user);
        //console.log(routeData)
        await think.cache('perms_' + user.admin_id, routeData);
        return routeData;
    }
    async cacheDataByUid(userId) {
        let user = await this.model('admin').where({ admin_id: userId }).find();
        let routeData = await this.cacheData(user);
        return routeData;
    }
    async getPerms(userId) {
        return think.cache('perms_' + userId);
    }


    /**
    * 前台渲染递归
    * @param {array} tid 
    * @returns 
    */
    async tree() {
        let data = await this.model('menu').select()
        //根据 id取出某一个分类的子集
        //console.log(tid)
        const findById = (id) => {
            let child = [];
            data.forEach((value) => {
                if (value.pid == id) {
                    value.name = value.title;
                    value.field = 'id';

                    value.spread = false;

                    child.push(value);
                }
            });
            return child;
        };
        // 递归查询到数据并将数据存储到数组 
        const deeploop = function (id) {
            let dataArr = findById(id);
            if (dataArr.length <= 0) {
                return null;
            } else {
                dataArr.forEach((value) => {
                    if (deeploop(value.id) != null) {
                        value["child"] = deeploop(value.id);
                        value["children"] = value['child'];
                    }
                });
            }
            return dataArr;
        };
        return deeploop(0)
    }

}