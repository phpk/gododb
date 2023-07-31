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
        if(val == '') {
            return await this.cache(uuid + key)
        }else {
            return await this.cache(uuid + key, val)
        }
    }
    
  };
  