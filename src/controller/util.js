module.exports = class extends think.Controller {
    __before() {

    }
    now(t = '') {
        if (t == '') {
            return parseInt((new Date().getTime()) / 1000);
        } else {
            return parseInt((new Date(t).getTime()) / 1000);
        }
    }
    getClientUUid() {
        return think.md5(JSON.stringify(this.ctx.header) + this.ctx.ip)
    }
    async ses(key, val = '') {
        let uuid = this.getClientUUid()
        //console.log(val)
        //console.log(uuid + key)
        if (val === '' || val === undefined) {
            //console.log(val)
            //console.log(uuid + key)
            return await this.cache(uuid + key)
        } else {
            return await this.cache(uuid + key, val)
        }
    }
    /**
   * 清除状态
   * @param {number} adminId 
   */
    async clearSatus() {
        await this.ses('loginNum', null);
        await this.ses('adminId', null);
        await this.ses('salt', null);
        await this.ses('statusTime', null);

    }

};
