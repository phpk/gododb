layui.define(function (exports) {
  const apiUrl = 'http://localhost:8210/';
  const TOKEN_NAME = 'rttoken';
  const notLoginUrl = 'http://localhost:8210/static/login.html';

  let layer = layui.layer;
  let $ = layui.$;

  const setToken = (res) => {
    localStorage.setItem(TOKEN_NAME, res);
  }

  const clearToken = () => {
    localStorage.removeItem(TOKEN_NAME);
  }
  const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
  }
  const getHeader = () => {
    let token = getToken(),
      grouptoken = {};
    if (token) {
      grouptoken[TOKEN_NAME] = token;
    }
    //grouptoken['Content-Type'] = 'application/x-www-form-urlencoded';
    return grouptoken;
  }
  const errorStatus = (xhr, layui) => {
    //console.log(xhr)
    if (xhr.status === 400) {
      layer.msg('未授权访问！', {
        icon: 2, time: 2000
      });
    }
    else if (xhr.status === 401) {
      layer.msg('访问接口未带token！', {
        icon: 2, time: 2000
      });
      top.location.href = notLoginUrl;
    }
    else if (xhr.status === 402) {
      layer.msg('token校验失败！', {
        icon: 2, time: 2000
      });
      top.location.href = notLoginUrl;
    }
    else if (xhr.status === 403) {
      layer.msg('一段时间未操作，超过保活时间！', {
        icon: 2, time: 2000
      });
      top.location.href = notLoginUrl;
    }
    else if (xhr.status === 409) {
      layer.msg('一段时间未操作，超过保活时间！', {
        icon: 2, time: 2000
      });
      top.location.href = notLoginUrl;
    }
    else if (xhr.status === 404) {
      layer.msg('请求的地址不存在！', {
        icon: 2, time: 2000
      });
    }
    else {
      layer.msg('通讯失败！请重试！', {
        icon: 2, time: 2000
      });
    }
  }
  const parseMsg = (msgs) => {
    if (!msgs) {
      layer.msg('系统错误', {
        icon: 2, time: 2000
      });
      return false;
    }
    if (msgs.constructor === Object) {
      //console.log('111')
      for (let p in msgs) {
        //console.log(msgs[p])
        layer.msg(msgs[p], {
          icon: 2, time: 2000
        });
      }
    } else {
      layer.msg(msgs, {
        icon: 2, time: 2000
      });
    }
  }
  const get = (url, suc, err) => {
    //console.log(`${apiUrl}${url}`)
    // layui.$.ajaxSetup({
    //     xhrFields: {
    //         withCredentials: true
    //     }
    // });
    $.ajax({
      type: "get",
      url: `${apiUrl}${url}`,
      //timeout: 10*60*1000,//10分钟等待
      headers: getHeader(),
      success: (res) => {
        //console.log(res)
        if (res.code === 0) {
          suc(res.data)
        } else {
          // layer.msg(res.message, {
          //     icon: 2, time: 2000
          // });
          err && err(res);
          parseMsg(res.message);
          
        }
      },
      error: (xhr) => {
        //console.log(xhr)
        err && err(xhr);
        errorStatus(xhr, layui)
      },
      complete: (xhr, ts) => {
        //console.log(xhr)
        //console.log(ts)
      }
    });
  }
  const post = (url, data, suc, err) => {
    //console.log(`${apiUrl}${url}`)
    // layui.$.ajaxSetup({
    //     xhrFields: {
    //         withCredentials: true
    //     }
    // });
    layui.$.ajax({
      type: "post",
      url: `${apiUrl}${url}`,
      headers: getHeader(),
      data,
      success: (res) => {
        //console.log(res)
        if (res.code === 0) {
          suc(res.data)
        } else {
          err && err(res);
          parseMsg(res.message, layui);

          if (res.code >= 400) {
            errorStatus({ status: res.code }, layui)
          }
          
        }
      },
      error: (xhr) => {
        err && err(xhr);
        errorStatus(xhr, layui)
      }
    });
  }
  const req = (param = '') => {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    if (param == '') {
      return theRequest;
    } else {
      if (theRequest[param]) {
        return theRequest[param];
      } else {
        return false;
      }
    }

  }

  // 输出模块
  exports('api', {apiUrl, setToken, getToken, clearToken, getHeader, get, post, req});
});