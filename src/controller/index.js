
/**
 *
 * @name:  godoDb
 * @author: ruitao
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
module.exports = class extends think.Controller {
  indexAction() {
    return this.redirect('/static/login.html')
  }
};
