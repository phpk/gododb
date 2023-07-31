
module.exports = class extends think.Controller {
  indexAction() {
    return this.redirect('/static/login.html')
  }
};
