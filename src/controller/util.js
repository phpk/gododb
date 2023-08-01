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
        //console.log(this.ctx.header)
        let key = this.ctx.header.uuid + this.ctx.ip;
        //console.log(key)
        return think.md5(key)
    }
    async ses(key, val = '') {
        let uuid = this.getClientUUid()
        if (val == '') {
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
