layui.define(function (exports) {
    var $ = layui.$;
    var id = 0;

    // 内置图标库
    var icons = {
        layui: [
            {
                classList: "layui-icon layui-icon-heart-fill",
                name: "实心",
            },
            {
                classList: "layui-icon layui-icon-heart",
                name: "空心",
            },
            {
                classList: "layui-icon layui-icon-light",
                name: "亮度/晴",
            },
            {
                classList: "layui-icon layui-icon-time",
                name: "时间/历史",
            },
            {
                classList: "layui-icon layui-icon-bluetooth",
                name: "蓝牙",
            },
            {
                classList: "layui-icon layui-icon-at",
                name: "@艾特",
            },
            {
                classList: "layui-icon layui-icon-mute",
                name: "静音",
            },
            {
                classList: "layui-icon layui-icon-mike",
                name: "录音/麦克风",
            },
            {
                classList: "layui-icon layui-icon-key",
                name: "密钥/钥匙",
            },
            {
                classList: "layui-icon layui-icon-gift",
                name: "礼物/活动",
            },
            {
                classList: "layui-icon layui-icon-email",
                name: "邮箱",
            },
            {
                classList: "layui-icon layui-icon-rss",
                name: "RSS",
            },
            {
                classList: "layui-icon layui-icon-wifi",
                name: "WiFi",
            },
            {
                classList: "layui-icon layui-icon-logout",
                name: "退出/注销",
            },
            {
                classList: "layui-icon layui-icon-android",
                name: "Android 安卓",
            },
            {
                classList: "layui-icon layui-icon-ios",
                name: "Apple IOS 苹果",
            },
            {
                classList: "layui-icon layui-icon-windows",
                name: "Windows",
            },
            {
                classList: "layui-icon layui-icon-transfer",
                name: "穿梭框",
            },
            {
                classList: "layui-icon layui-icon-service",
                name: "客服",
            },
            {
                classList: "layui-icon layui-icon-subtraction",
                name: "减",
            },
            {
                classList: "layui-icon layui-icon-addition",
                name: "加",
            },
            {
                classList: "layui-icon layui-icon-slider",
                name: "滑块",
            },
            {
                classList: "layui-icon layui-icon-print",
                name: "打印",
            },
            {
                classList: "layui-icon layui-icon-export",
                name: "导出",
            },
            {
                classList: "layui-icon layui-icon-cols",
                name: "列",
            },
            {
                classList: "layui-icon layui-icon-screen-restore",
                name: "退出全屏",
            },
            {
                classList: "layui-icon layui-icon-screen-full",
                name: "全屏",
            },
            {
                classList: "layui-icon layui-icon-rate-half",
                name: "半星",
            },
            {
                classList: "layui-icon layui-icon-rate",
                name: "星星-空心",
            },
            {
                classList: "layui-icon layui-icon-rate-solid",
                name: "星星-实心",
            },
            {
                classList: "layui-icon layui-icon-cellphone",
                name: "手机",
            },
            {
                classList: "layui-icon layui-icon-vercode",
                name: "验证码",
            },
            {
                classList: "layui-icon layui-icon-login-wechat",
                name: "微信",
            },
            {
                classList: "layui-icon layui-icon-login-qq",
                name: "QQ",
            },
            {
                classList: "layui-icon layui-icon-login-weibo",
                name: "微博",
            },
            {
                classList: "layui-icon layui-icon-password",
                name: "密码",
            },
            {
                classList: "layui-icon layui-icon-username",
                name: "用户名",
            },
            {
                classList: "layui-icon layui-icon-refresh-3",
                name: "刷新-粗",
            },
            {
                classList: "layui-icon layui-icon-auz",
                name: "授权",
            },
            {
                classList: "layui-icon layui-icon-spread-left",
                name: "左向右伸缩菜单",
            },
            {
                classList: "layui-icon layui-icon-shrink-right",
                name: "右向左伸缩菜单",
            },
            {
                classList: "layui-icon layui-icon-snowflake",
                name: "雪花",
            },
            {
                classList: "layui-icon layui-icon-tips",
                name: "提示说明",
            },
            {
                classList: "layui-icon layui-icon-note",
                name: "便签",
            },
            {
                classList: "layui-icon layui-icon-home",
                name: "主页",
            },
            {
                classList: "layui-icon layui-icon-senior",
                name: "高级",
            },
            {
                classList: "layui-icon layui-icon-refresh",
                name: "刷新",
            },
            {
                classList: "layui-icon layui-icon-refresh-1",
                name: "刷新",
            },
            {
                classList: "layui-icon layui-icon-flag",
                name: "旗帜",
            },
            {
                classList: "layui-icon layui-icon-theme",
                name: "主题",
            },
            {
                classList: "layui-icon layui-icon-notice",
                name: "消息-通知",
            },
            {
                classList: "layui-icon layui-icon-website",
                name: "网站",
            },
            {
                classList: "layui-icon layui-icon-console",
                name: "控制台",
            },
            {
                classList: "layui-icon layui-icon-face-surprised",
                name: "表情-惊讶",
            },
            {
                classList: "layui-icon layui-icon-set",
                name: "设置-空心",
            },
            {
                classList: "layui-icon layui-icon-template-1",
                name: "模板",
            },
            {
                classList: "layui-icon layui-icon-app",
                name: "应用",
            },
            {
                classList: "layui-icon layui-icon-template",
                name: "模板",
            },
            {
                classList: "layui-icon layui-icon-praise",
                name: "赞",
            },
            {
                classList: "layui-icon layui-icon-tread",
                name: "踩",
            },
            {
                classList: "layui-icon layui-icon-male",
                name: "男",
            },
            {
                classList: "layui-icon layui-icon-female",
                name: "女",
            },
            {
                classList: "layui-icon layui-icon-camera",
                name: "相机-空心",
            },
            {
                classList: "layui-icon layui-icon-camera-fill",
                name: "相机-实心",
            },
            {
                classList: "layui-icon layui-icon-more",
                name: "菜单-水平",
            },
            {
                classList: "layui-icon layui-icon-more-vertical",
                name: "菜单-垂直",
            },
            {
                classList: "layui-icon layui-icon-rmb",
                name: "金额-人民币",
            },
            {
                classList: "layui-icon layui-icon-dollar",
                name: "金额-美元",
            },
            {
                classList: "layui-icon layui-icon-diamond",
                name: "钻石-等级",
            },
            {
                classList: "layui-icon layui-icon-fire",
                name: "火",
            },
            {
                classList: "layui-icon layui-icon-return",
                name: "返回",
            },
            {
                classList: "layui-icon layui-icon-location",
                name: "位置-地图",
            },
            {
                classList: "layui-icon layui-icon-read",
                name: "办公-阅读",
            },
            {
                classList: "layui-icon layui-icon-survey",
                name: "调查",
            },
            {
                classList: "layui-icon layui-icon-face-smile",
                name: "表情-微笑",
            },
            {
                classList: "layui-icon layui-icon-face-cry",
                name: "表情-哭泣",
            },
            {
                classList: "layui-icon layui-icon-cart-simple",
                name: "购物车",
            },
            {
                classList: "layui-icon layui-icon-cart",
                name: "购物车",
            },
            {
                classList: "layui-icon layui-icon-next",
                name: "下一页",
            },
            {
                classList: "layui-icon layui-icon-prev",
                name: "上一页",
            },
            {
                classList: "layui-icon layui-icon-upload-drag",
                name: "上传-空心-拖拽",
            },
            {
                classList: "layui-icon layui-icon-upload",
                name: "上传-实心",
            },
            {
                classList: "layui-icon layui-icon-download-circle",
                name: "下载-圆圈",
            },
            {
                classList: "layui-icon layui-icon-component",
                name: "组件",
            },
            {
                classList: "layui-icon layui-icon-file-b",
                name: "文件-粗",
            },
            {
                classList: "layui-icon layui-icon-user",
                name: "用户",
            },
            {
                classList: "layui-icon layui-icon-find-fill",
                name: "发现-实心",
            },
            {
                classList: "layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop",
                name: "loading",
            },
            {
                classList: "layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop",
                name: "loading",
            },
            {
                classList: "layui-icon layui-icon-add-1",
                name: "添加",
            },
            {
                classList: "layui-icon layui-icon-play",
                name: "播放",
            },
            {
                classList: "layui-icon layui-icon-pause",
                name: "暂停",
            },
            {
                classList: "layui-icon layui-icon-headset",
                name: "音频-耳机",
            },
            {
                classList: "layui-icon layui-icon-video",
                name: "视频",
            },
            {
                classList: "layui-icon layui-icon-voice",
                name: "语音-声音",
            },
            {
                classList: "layui-icon layui-icon-speaker",
                name: "消息-通知-喇叭",
            },
            {
                classList: "layui-icon layui-icon-fonts-del",
                name: "删除线",
            },
            {
                classList: "layui-icon layui-icon-fonts-code",
                name: "代码",
            },
            {
                classList: "layui-icon layui-icon-fonts-html",
                name: "HTML",
            },
            {
                classList: "layui-icon layui-icon-fonts-strong",
                name: "字体加粗",
            },
            {
                classList: "layui-icon layui-icon-unlink",
                name: "删除链接",
            },
            {
                classList: "layui-icon layui-icon-picture",
                name: "图片",
            },
            {
                classList: "layui-icon layui-icon-link",
                name: "链接",
            },
            {
                classList: "layui-icon layui-icon-face-smile-b",
                name: "表情-笑-粗",
            },
            {
                classList: "layui-icon layui-icon-align-left",
                name: "左对齐",
            },
            {
                classList: "layui-icon layui-icon-align-right",
                name: "右对齐",
            },
            {
                classList: "layui-icon layui-icon-align-center",
                name: "居中对齐",
            },
            {
                classList: "layui-icon layui-icon-fonts-u",
                name: "字体-下划线",
            },
            {
                classList: "layui-icon layui-icon-fonts-i",
                name: "字体-斜体",
            },
            {
                classList: "layui-icon layui-icon-tabs",
                name: "Tabs 选项卡",
            },
            {
                classList: "layui-icon layui-icon-radio",
                name: "单选框-选中",
            },
            {
                classList: "layui-icon layui-icon-circle",
                name: "单选框-候选",
            },
            {
                classList: "layui-icon layui-icon-edit",
                name: "编辑",
            },
            {
                classList: "layui-icon layui-icon-share",
                name: "分享",
            },
            {
                classList: "layui-icon layui-icon-delete",
                name: "删除",
            },
            {
                classList: "layui-icon layui-icon-form",
                name: "表单",
            },
            {
                classList: "layui-icon layui-icon-cellphone-fine",
                name: "手机-细体",
            },
            {
                classList: "layui-icon layui-icon-dialogue",
                name: "聊天 对话 沟通",
            },
            {
                classList: "layui-icon layui-icon-fonts-clear",
                name: "文字格式化",
            },
            {
                classList: "layui-icon layui-icon-layer",
                name: "窗口",
            },
            {
                classList: "layui-icon layui-icon-date",
                name: "日期",
            },
            {
                classList: "layui-icon layui-icon-water",
                name: "水 下雨",
            },
            {
                classList: "layui-icon layui-icon-code-circle",
                name: "代码-圆圈",
            },
            {
                classList: "layui-icon layui-icon-carousel",
                name: "轮播组图",
            },
            {
                classList: "layui-icon layui-icon-prev-circle",
                name: "翻页",
            },
            {
                classList: "layui-icon layui-icon-layouts",
                name: "布局",
            },
            {
                classList: "layui-icon layui-icon-util",
                name: "工具",
            },
            {
                classList: "layui-icon layui-icon-templeate-1",
                name: "选择模板",
            },
            {
                classList: "layui-icon layui-icon-upload-circle",
                name: "上传-圆圈",
            },
            {
                classList: "layui-icon layui-icon-tree",
                name: "树",
            },
            {
                classList: "layui-icon layui-icon-table",
                name: "表格",
            },
            {
                classList: "layui-icon layui-icon-chart",
                name: "图表",
            },
            {
                classList: "layui-icon layui-icon-chart-screen",
                name: "图标 报表 屏幕",
            },
            {
                classList: "layui-icon layui-icon-engine",
                name: "引擎",
            },
            {
                classList: "layui-icon layui-icon-triangle-d",
                name: "下三角",
            },
            {
                classList: "layui-icon layui-icon-triangle-r",
                name: "右三角",
            },
            {
                classList: "layui-icon layui-icon-file",
                name: "文件",
            },
            {
                classList: "layui-icon layui-icon-set-sm",
                name: "设置-小型",
            },
            {
                classList: "layui-icon layui-icon-reduce-circle",
                name: "减少-圆圈",
            },
            {
                classList: "layui-icon layui-icon-add-circle",
                name: "添加-圆圈",
            },
            {
                classList: "layui-icon layui-icon-404",
                name: "404",
            },
            {
                classList: "layui-icon layui-icon-about",
                name: "关于",
            },
            {
                classList: "layui-icon layui-icon-up",
                name: "箭头 向上",
            },
            {
                classList: "layui-icon layui-icon-down",
                name: "箭头 向下",
            },
            {
                classList: "layui-icon layui-icon-left",
                name: "箭头 向左",
            },
            {
                classList: "layui-icon layui-icon-right",
                name: "箭头 向右",
            },
            {
                classList: "layui-icon layui-icon-circle-dot",
                name: "圆点",
            },
            {
                classList: "layui-icon layui-icon-search",
                name: "搜索",
            },
            {
                classList: "layui-icon layui-icon-set-fill",
                name: "设置-实心",
            },
            {
                classList: "layui-icon layui-icon-group",
                name: "群组",
            },
            {
                classList: "layui-icon layui-icon-friends",
                name: "好友",
            },
            {
                classList: "layui-icon layui-icon-reply-fill",
                name: "回复 评论 实心",
            },
            {
                classList: "layui-icon layui-icon-menu-fill",
                name: "菜单 隐身 实心",
            },
            {
                classList: "layui-icon layui-icon-log",
                name: "记录",
            },
            {
                classList: "layui-icon layui-icon-picture-fine",
                name: "图片-细体",
            },
            {
                classList: "layui-icon layui-icon-face-smile-fine",
                name: "表情-笑-细体",
            },
            {
                classList: "layui-icon layui-icon-list",
                name: "列表",
            },
            {
                classList: "layui-icon layui-icon-release",
                name: "发布 纸飞机",
            },
            {
                classList: "layui-icon layui-icon-ok",
                name: "对 OK",
            },
            {
                classList: "layui-icon layui-icon-help",
                name: "帮助",
            },
            {
                classList: "layui-icon layui-icon-chat",
                name: "客服",
            },
            {
                classList: "layui-icon layui-icon-top",
                name: "top 置顶",
            },
            {
                classList: "layui-icon layui-icon-star",
                name: "收藏-空心",
            },
            {
                classList: "layui-icon layui-icon-star-fill",
                name: "收藏-实心",
            },
            {
                classList: "layui-icon layui-icon-close-fill",
                name: "关闭-实心",
            },
            {
                classList: "layui-icon layui-icon-close",
                name: "关闭-空心",
            },
            {
                classList: "layui-icon layui-icon-ok-circle",
                name: "正确",
            },
            {
                classList: "layui-icon layui-icon-add-circle-fine",
                name: "添加-圆圈-细体",
            },
        ],
        
    };
    // 扩展入口
    function Plugin() {
        this.name = "iconSelect";
        this.version = "1.0.0";
        //this.package = this.name.replace(/([A-Z])/g, "-$1").toLowerCase();
        this.package = "icon-selected-plus";
        this.icons = icons;
        this.options = {
            // 默认提示文字
            placeholder: "选择图标",
            // 显示的图标，默认layui+fontAwesome4
            icons: icons.layui,
            // 选中图标后是否自动关闭弹层
            autoClose: true,
            // 是否是简约模式，简约模式就一个图标，没搜索用的输入框
            simple: true,
            // 图标容器的定位，默认下方，可设置为top
            position: "bottom",
            // 是否允许回车键快速选择第一个图标
            enterSelected: true,
            // 是否允许在按下esc后快速关闭容器
            escClose: true,
            // 事件托管
            event: {
                // DOM准备创建但还没有创建，虚晃一枪
                beforeCreate: function () {},
                // DOM已经创建但还没有塞到页面上，双喜临门！
                created: function () {},
                // DOM准备挂载了！但实际还没有挂载！三阳开泰！
                beforeMount: function () {},
                // DOM这回挂载了，简称：真实的DOM！nice！
                mounted: function () {},
                // 当某个图标被选择
                selected: function () {},
                // 当点击清理按钮
                clear: function () {},
            },
        };
    }

    // 构建路径, 通常用于自定义DOM的classList或id
    Plugin.prototype.buildPath = function () {
        var path = [this.package].concat(Array.apply(this, arguments));
        return path.join("-");
    };

    /**
     * 合并对象
     * @param {*} obj1 对象1
     * @param {*} obj2 对象2
     * @returns
     */
    Plugin.prototype.mergeObject = function (obj1, obj2) {
        var _this = this;
        if (!obj1) obj1 = {};
        if (!obj2) obj2 = {};

        var result = {};

        Object.keys(obj1).forEach(function (key) {
            if (obj2[key]) {
                if (_this.isObject(obj1[key])) {
                    result[key] = _this.mergeObject(obj1[key], obj2[key]);
                } else {
                    result[key] = obj2[key];
                }
            } else {
                result[key] = obj1[key];
            }
        });
        return result;
    };

    /**
     * 检查是否是对象
     * @param {*} data
     * @returns
     */
    Plugin.prototype.isObject = function (data) {
        return Object.prototype.toString.call(data) === "[object Object]";
    };

    /**
     * 激活配置中的函数
     * @param {*} reference 参考配置
     * @param {*} funcName 函数名
     */
    Plugin.prototype.activeFunction = function (reference, funcName, args) {
        if (typeof reference !== "undefined" && this.isObject(reference)) {
            if (typeof reference[funcName] === "function") {
                reference[funcName](args);
            }
        }
    };

    // 渲染入口
    Plugin.prototype.render = function (elem, opt) {
        if (!elem) throw new Error("丢失必要参数: elem");
        if (!opt) opt = {};

        var $elems = $(elem);

        var _this = this;

        $elems.each(function () {
            id++;
            main($(this), _this.mergeObject(_this.options, opt || {}), _this, id);
        });
    };

    // 入口
    function main(elem, opt, plugin, id) {
        var _this = plugin;

        // 初始化配置
        var placeholder = elem.attr("placeholder") || opt.placeholder;
        var readonly = elem.attr("readonly") ? true : false;
        var enterSelected = opt.enterSelected;
        var escClose = opt.escClose;
        var event = opt.event;
        var icons = opt.icons || icons.layui;
        var autoClose = opt.autoClose;
        var position = opt.position;
        var simple = opt.simple;
        var selectedClass = _this.buildPath("selected");
        var iconClass = _this.buildPath("icon");
        var iconContainerClass = _this.buildPath("icon-container");
        var value = elem.val();

        // 初始化必要节点
        var $parent = elem.parent();
        var $elem = elem.clone();

        // 隐藏本身dom
        elem.hide();

        // 渲染图标
        function renderIcons(icons) {
            $iconContainer.empty();

            // 填充图标容器
            icons.forEach(function (icon) {
                var $icon = $("<div>").addClass(iconClass).attr("data-value", icon.classList);
                var $i = $("<i>").addClass(_this.buildPath("icon-ico")).addClass(icon.classList);
                var $span = $("<span>").addClass(_this.buildPath("icon-name")).text(icon.name);
                $icon.append($i).append($span);
                $iconContainer.append($icon);
            });
        }

        // 选中图标
        function selectedIcon(val) {
            if (!val) val = "";
            elem.val(val);
            $input.val(val);
            $iconContainer.find(">div").removeClass(selectedClass);
            if (val) {
                _this.activeFunction(event, "selected", createData({ value: val }));
                var $icon = $("<i>").addClass(val);
                $iconEcho.empty().append($icon);
                $iconContainer.find(">div[data-value='" + val + "']").addClass(selectedClass);
                if (!readonly) $delBtn.show();
            } else {
                _this.activeFunction(event, "clear", createData());
                $iconEcho.empty();
                $delBtn.hide();
            }
        }

        // 创建 data 数据结构
        function createData(extData) {
            return {
                dom: {
                    $container,
                    $inputContainer,
                    $iconContainer,
                    $input,
                    $echoContainer,
                    $iconEcho,
                    $delBtn,
                },
                target: { elem, opt, plugin, id },
                data: extData,
            };
        }

        // 触发事件：beforeCreate
        _this.activeFunction(event, "beforeCreate", createData());

        // 创建容器
        var $container = $("<div>")
            .addClass(_this.buildPath("container"))
            .attr("id", _this.buildPath(id + ""))
            .addClass(_this.buildPath("position-" + position));
        var $inputContainer = $("<div>").addClass(_this.buildPath("input-container"));
        var $iconContainer = $("<div>").addClass(iconContainerClass);

        // 创建新的输入框容器和清理按钮
        var $input = $("<input>").addClass(_this.buildPath("input")).addClass("layui-input");
        var $echoContainer = $("<div>").addClass(_this.buildPath("echo-container"));
        var $iconEcho = $("<div>").addClass(_this.buildPath("icon-echo"));
        var $delBtn = $("<i>").addClass("layui-icon layui-icon-close-fill");

        // 删除按钮事件
        $delBtn.on("click", function () {
            selectedIcon();
        });

        // 填充容器
        $echoContainer.append($iconEcho).append($delBtn);

        // 只读模式
        if (readonly) {
            $input.attr("readonly", true);
            $delBtn.hide();
        }

        // 是否有值
        if (!value) {
            $delBtn.hide();
        }

        // 关闭弹窗
        $(document).on("click", function () {
            $iconContainer.hide();
        });

        // 宣传图标
        renderIcons(icons);

        // 默认选中
        if (value) selectedIcon(value);

        // 配置输入框
        $input.attr("placeholder", placeholder);
        $iconContainer
            .hide()
            .on("click", "." + iconClass, function () {
                var $elem = $(this);
                var val = $elem.attr("data-value");
                if (val) selectedIcon(val);
            })
            .on("click", function (e) {
                if (!autoClose) e.stopPropagation();
            });

        // 填充输入框容器
        if (simple) {
            $container.addClass(_this.buildPath("simple"));
            $inputContainer.append($echoContainer);

            $iconEcho.on("click", function (e) {
                e.stopPropagation();
                $("." + iconContainerClass).hide();
                $iconContainer.show();
            });
        } else {
            $inputContainer.append($input).append($echoContainer);

            if (!readonly) {
                $input
                    .on("click", function (e) {
                        e.stopPropagation();
                        $("." + iconContainerClass).hide();
                        $iconContainer.show();
                    })
                    .on("focus", function () {
                        $(this).trigger("select");
                    })
                    .on("input", function () {
                        var val = $(this).val();

                        if (val) {
                            var matchIcons = [];
                            icons.forEach(function (icon) {
                                var key1 = val.toLowerCase();
                                var key2 = icon.classList.toLowerCase();
                                var key3 = icon.name.toLowerCase();

                                if (key2.indexOf(key1) !== -1 || key3.indexOf(key1) !== -1) {
                                    matchIcons.push(icon);
                                }
                            });

                            renderIcons(matchIcons);
                        } else {
                            renderIcons(icons);
                            $iconEcho.empty();
                        }
                    })
                    .on("keypress", function (e) {
                        if (e.keyCode === 13 && enterSelected) {
                            var val = $iconContainer.find(">div:eq(0)").attr("data-value");
                            selectedIcon(val);
                            e.stopPropagation();
                            $iconContainer.hide();
                            return false;
                        }
                    })
                    .on("keydown", function (e) {
                        if (e.keyCode === 27 && escClose) {
                            $iconContainer.hide();
                        }
                    });
            }
        }

        // 填充总容器
        $container.append($inputContainer).append($iconContainer);

        // 触发事件，DOM创建完毕，即将塞到页面上
        _this.activeFunction(event, "created", createData());

        // 准备挂载DOM但实际还没有挂载
        _this.activeFunction(event, "beforeMount", createData());

        // 塞入页面
        $parent.append($container);

        // 触发事件，DOM创建完毕，即将塞到页面上
        _this.activeFunction(event, "mounted", createData());
    }

    var plugin = new Plugin();
    layui.link("/static/css/iconselect.css");
    exports('iconselect', plugin);
});
