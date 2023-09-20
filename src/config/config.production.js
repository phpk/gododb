// production config, it will load in production enviroment
module.exports = {
  workers: 1,
  port: 8212,
  statusTime: 1 * 60 * 60, //保活时间，默认1小时
  errnoField: 'code', // errno field
  errmsgField: 'message', // errmsg field
  defaultErrno: 201, // default errno
  validateDefaultErrno: 202, // 
};
