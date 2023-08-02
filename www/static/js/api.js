/**
 *
 * @name:  godoDb
 * @author: ruitao  
 * @email: xpbb@qq.com
 * @link: http://gdoa.top
 * @license: LGPL
 * @version: v1.0.0
 */
layui.define(function (exports) {
  //const apiUrl = 'http://localhost:8210/';
  const apiUrl = '/';
  const TOKEN_NAME = 'rttoken';
  //const notLoginUrl = 'http://localhost:8210/static/login.html';
  const notLoginUrl = '/static/login.html';
  let layer = layui.layer;
  let $ = layui.$;
  function bin2hex(s) {
    s = encodeURI(s);//只会有0-127的ascii不转化
    let m = s.match(/%[\dA-F]{2}/g), a = s.split(/%[\dA-F]{2}/), i, j, n, t;
    m.push("")
    for (i in a) {
      if (a[i] === "") { a[i] = m[i]; continue }
      n = ""
      for (j in a[i]) {
        t = a[i][j].charCodeAt().toString(16).toUpperCase()
        if (t.length === 1) t = "0" + t
        n += "%" + t
      }
      a[i] = n + m[i]
    }
    return a.join("").split("%").join("")
  }
  const getUUid = () => {
    let uuid = localStorage.getItem('userUUid');
    if(!uuid) {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(0, 0, 8, 10);
      let b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
      let bin = window.atob(b64);
      uuid = bin2hex(bin.slice(-16, -12));
      localStorage.setItem('userUUid', uuid);
    }
    
    return uuid;
  }
  const setToken = (res) => {
    localStorage.setItem(TOKEN_NAME, res);
  }

  const clearToken = () => {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem('userUUid');
  }
  const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
  }
  const setMenu = (data) => {
    localStorage.setItem(TOKEN_NAME + "_menus", JSON.stringify(data));
  }
  const getMenu = () => {
    let data = localStorage.getItem(TOKEN_NAME + "_menus");
    return JSON.parse(data)
  }

  const getHeader = () => {
    let token = getToken(),
      grouptoken = {},
      uuid = getUUid();
    //console.log(token)
    if (token && typeof(token)=='string') {
      grouptoken[TOKEN_NAME] = token;
    }
    grouptoken['uuid'] = uuid;
    //console.log(grouptoken)
    //grouptoken['Content-Type'] = 'application/x-www-form-urlencoded';
    return grouptoken;
  }
  const errorStatus = (xhr) => {
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
    else if (xhr.status === 406) {
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
          suc && suc(res.data)
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
        errorStatus(xhr)
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
        
        if (res.code === 0) {
          suc(res.data)
        } else {
          err && err(res);
          parseMsg(res.message);

          if (res.code >= 400) {
            errorStatus({ status: res.code })
          }

        }
      },
      error: (xhr) => {
        err && err(xhr);
        //console.log(xhr)
        errorStatus(xhr)
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
  exports('api', { 
    apiUrl, 
    setToken, 
    getToken, 
    clearToken, 
    setMenu,
    getMenu,
    getHeader, 
    get, 
    post, 
    req });
});