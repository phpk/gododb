/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50641
 Source Host           : localhost:3306
 Source Schema         : gododb

 Target Server Type    : MySQL
 Target Server Version : 50641
 File Encoding         : 65001

 Date: 03/08/2023 10:15:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rt_admin
-- ----------------------------
DROP TABLE IF EXISTS `rt_admin`;
CREATE TABLE `rt_admin` (
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `admin_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '唯一标志',
  `salt` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码钥匙',
  `add_time` int(10) NOT NULL DEFAULT '0' COMMENT '添加时间',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '真实姓名',
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT '0' COMMENT '手机号',
  `status` tinyint(2) NOT NULL DEFAULT '1' COMMENT '状态1正常0禁用',
  `login_time` int(10) DEFAULT '0' COMMENT '登录时间',
  `login_num` int(10) DEFAULT '0' COMMENT '登录次数',
  `update_time` int(10) DEFAULT '0' COMMENT '更新时间',
  `rules` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '-1',
  PRIMARY KEY (`admin_id`) USING BTREE,
  UNIQUE KEY `username` (`username`) USING BTREE,
  UNIQUE KEY `mobile` (`mobile`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员表';

-- ----------------------------
-- Records of rt_admin
-- ----------------------------
BEGIN;
INSERT INTO `rt_admin` VALUES ('admin', '6d585e2c9760497cac7b1d7de2af5a4c', 1, '5KhNBSWmzf8zTRmj', 0, NULL, NULL, 0, 1691028880, 395, 0, '-1');
INSERT INTO `rt_admin` VALUES ('test', '0fc4cb8f312dad842411e616bb5eca33', 7, 'H6pecfi8GS7DRHji', 1690966737, 'test2', '13873150575', 0, 0, 0, 1690967270, '-1');
COMMIT;

-- ----------------------------
-- Table structure for rt_admin_auth
-- ----------------------------
DROP TABLE IF EXISTS `rt_admin_auth`;
CREATE TABLE `rt_admin_auth` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `rules` text CHARACTER SET utf8,
  `status` tinyint(2) unsigned DEFAULT '0' COMMENT '是否可用0可用1不可用',
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理权限表';

-- ----------------------------
-- Records of rt_admin_auth
-- ----------------------------
BEGIN;
INSERT INTO `rt_admin_auth` VALUES (1, '总管理员', '-1', 0, NULL);
INSERT INTO `rt_admin_auth` VALUES (2, 'test', '2,35,88,89', 0, 'test');
COMMIT;

-- ----------------------------
-- Table structure for rt_adminlog
-- ----------------------------
DROP TABLE IF EXISTS `rt_adminlog`;
CREATE TABLE `rt_adminlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `admin_id` int(10) unsigned NOT NULL COMMENT '管理员账号',
  `log` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '日志名称',
  `data` text CHARACTER SET utf8 COMMENT '返回记录',
  `ip` varchar(64) CHARACTER SET utf8 DEFAULT '' COMMENT 'IP地址',
  `agent` varchar(255) CHARACTER SET utf8 DEFAULT '' COMMENT '客户端信息',
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '地址',
  `method` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '方法',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '添加时间',
  `type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '日志类型',
  `leavetime` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理操作日志';

-- ----------------------------
-- Records of rt_adminlog
-- ----------------------------
BEGIN;
INSERT INTO `rt_adminlog` VALUES (1, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"31\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690857164, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (2, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"23\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690857173, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (3, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"31\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690857425, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (4, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"39\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690861691, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (5, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"35\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690866922, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (6, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"31\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690871201, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (7, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"29\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690873314, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (8, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"41\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690874184, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (9, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"26\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690875634, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (10, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"45\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690882175, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (11, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"28\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690939770, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (12, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"33\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690939929, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (13, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"21\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690940018, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (14, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"32\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690960382, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (15, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"30\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690961373, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (16, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"34\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690961663, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (17, 1, '设置菜单显示', '{\"id\":\"2\",\"ifshow\":\"1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/ifshow', 'POST', 1690963540, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (18, 1, '设置菜单显示', '{\"id\":\"2\",\"ifshow\":\"0\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/ifshow', 'POST', 1690963547, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (19, 1, '添加管理员', '{\"username\":\"test222\",\"name\":\"111111\",\"mobile\":\"13873150571\",\"status\":\"0\",\"auth_name\":\"aaa\",\"auth_id\":\"2\",\"remark\":\"\",\"salt\":\"xJPF7dpa3sCTQCdb\",\"add_time\":1690966254,\"rules\":\"1,4,5,7,37,53\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/add', 'POST', 1690966254, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (20, 1, '删除管理员', '{\"admin_id\":\"5\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/del', 'POST', 1690966703, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (21, 1, '删除管理员', '{\"admin_id\":\"2\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/del', 'POST', 1690966708, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (22, 1, '添加管理员', '{\"username\":\"test\",\"name\":\"test\",\"mobile\":\"13873150575\",\"status\":\"0\",\"auth_name\":\"总管理员\",\"auth_id\":\"1\",\"remark\":\"111\",\"salt\":\"73ea72abz6Caktmb\",\"add_time\":1690966737,\"rules\":\"-1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/add', 'POST', 1690966737, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (23, 1, '编辑管理员', '{\"username\":\"test\",\"name\":\"test2\",\"mobile\":\"13873150575\",\"status\":\"0\",\"auth_name\":\"总管理员\",\"auth_id\":\"1\",\"remark\":\"\",\"admin_id\":\"7\",\"rules\":\"-1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/edit', 'POST', 1690967259, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (24, 1, '编辑管理员', '{\"username\":\"test\",\"name\":\"test2\",\"mobile\":\"13873150575\",\"status\":\"0\",\"auth_name\":\"总管理员\",\"auth_id\":\"1\",\"remark\":\"\",\"admin_id\":\"7\",\"salt\":\"H6pecfi8GS7DRHji\",\"update_time\":1690967270,\"rules\":\"-1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/edit', 'POST', 1690967270, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (25, 1, '设置管理员可用', '{\"id\":\"7\",\"status\":\"1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/enable', 'POST', 1690967278, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (26, 1, '设置管理员可用', '{\"id\":\"7\",\"status\":\"0\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/admin/enable', 'POST', 1690967283, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (27, 1, '删除角色', '{\"id\":\"15\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/del', 'POST', 1690967334, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (28, 1, '设置角色可用', '{\"id\":\"2\",\"status\":\"1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/enable', 'POST', 1690967337, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (29, 1, '添加角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"13\",\"remark\":\"\",\"rules\":\"2,12,35,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,122,130,132,133,134,135,136,137,138,139,140,141,131,3,9,20,21,22,23,57,142,10,26,27,56,58,59,60,61,11,24,25,62,63,64,65,13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/add', 'POST', 1690967350, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (30, 1, '编辑角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"13\",\"remark\":\"\",\"rules\":\"2,12,35,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,122,130,132,133,134,135,136,137,138,139,140,141,131,3,9,20,21,22,23,57,142,11,24,25,62,63,64,65,13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/edit', 'POST', 1690967358, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (31, 1, '编辑角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"13\",\"remark\":\"\",\"rules\":\"2,12,35,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,122,130,132,133,134,135,136,137,138,139,140,141,131,3,13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/edit', 'POST', 1690968087, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (32, 1, '编辑角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"13\",\"remark\":\"\",\"rules\":\"2,12,35,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,122,130,132,133,134,135,136,137,138,139,140,141,131,3,9,20,22,23,57,142,13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/edit', 'POST', 1690968102, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (33, 1, '编辑角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"13\",\"remark\":\"\",\"rules\":\"2,12,35,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,122,130,132,133,134,135,136,137,138,139,140,141,131,3,9,21,22,23,57,142,13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/edit', 'POST', 1690968120, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (34, 1, '删除角色', '{\"id\":\"13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/del', 'POST', 1690968148, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (35, 1, '编辑角色', '{\"name\":\"test\",\"status\":\"0\",\"id\":\"2\",\"remark\":\"test\",\"rules\":\"2,35,88,89\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/auth/edit', 'POST', 1690968174, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (36, 1, '删除菜单', '{\"id\":\"13\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/del', 'POST', 1690968190, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (37, 1, '编辑菜单', '{\"title\":\"数据库设计\",\"route\":\"db/list\",\"href\":\"db/list.html\",\"icon\":\"layui-icon layui-icon-template-1\",\"type\":\"1\",\"order_num\":\"3\",\"id\":\"35\",\"pid\":\"2\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/edit', 'POST', 1690968218, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (38, 1, '编辑菜单', '{\"title\":\"日志管理\",\"route\":\"logs/list\",\"href\":\"logs/list.html\",\"icon\":\"layui-icon layui-icon-spread-left\",\"type\":\"1\",\"order_num\":\"12\",\"id\":\"12\",\"pid\":\"2\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/edit', 'POST', 1690968259, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (39, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"6\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1690968910, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (40, 1, '添加数据库', '{\"database\":\"gododb\",\"user\":\"root\",\"password\":\"root\",\"host\":\"127.0.0.1\",\"port\":\"3306\",\"prefix\":\"rt_\",\"encoding\":\"utf8\",\"shost\":\"127.0.0.1\",\"sport\":\"22\",\"suser\":\"root\",\"stype\":\"1\",\"spass\":\"\",\"file\":\"\",\"spath\":\"\",\"ssh\":\"0\",\"isdef\":1,\"id\":2,\"safeList\":[]}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/confAdd', 'POST', 1690969164, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (41, 1, '更换数据库', '{\"id\":\"1\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/confChange', 'POST', 1690969181, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (42, 1, '备份数据', '{}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/backup', 'POST', 1690969214, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (43, 1, '还原数据', '{\"file\":\"gdcms-2023-08-02_17:40:13.sql\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/reback', 'POST', 1690969249, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (44, 1, '删除还原数据', '{\"file\":\"gdcms-2023-08-02_17:40:13.sql\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/delback', 'POST', 1690969255, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (45, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"status\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969415, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (46, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"update_time\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969436, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (47, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"admin_id\\\",\\\"comment\\\":\\\"唯一标志\\\",\\\"type\\\":\\\"int(10) unsigned\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"PRI\\\",\\\"extra\\\":\\\"auto_increment\\\",\\\"default\\\":null,\\\"order\\\":3,\\\"LAY_NUM\\\":3,\\\"LAY_INDEX\\\":2}\",\"t\":\"AFTER\",\"sortField\":\"username\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969502, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (48, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"admin_id\\\",\\\"comment\\\":\\\"唯一标志\\\",\\\"type\\\":\\\"int(10) unsigned\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"PRI\\\",\\\"extra\\\":\\\"auto_increment\\\",\\\"default\\\":null,\\\"order\\\":3,\\\"LAY_NUM\\\":3,\\\"LAY_INDEX\\\":2}\",\"t\":\"BEFORE\",\"sortField\":\"username\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969504, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (49, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"name\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969519, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (50, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"mobile\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969521, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (51, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"status\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969522, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (52, 1, '字段排序', '{\"table\":\"rt_admin\",\"row\":\"{\\\"name\\\":\\\"add_time\\\",\\\"comment\\\":\\\"添加时间\\\",\\\"type\\\":\\\"int(10)\\\",\\\"isnull\\\":\\\"NO\\\",\\\"key\\\":\\\"\\\",\\\"extra\\\":\\\"\\\",\\\"default\\\":\\\"0\\\",\\\"order\\\":5,\\\"LAY_NUM\\\":5,\\\"LAY_INDEX\\\":4}\",\"t\":\"AFTER\",\"sortField\":\"login_num\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/sortField', 'POST', 1690969523, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (53, 1, '编辑表', '{\"table\":\"rt_ding_dept\",\"field\":\"Comment\",\"value\":\"钉钉部门\",\"old\":\"rt_ding_dept\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/editTable', 'POST', 1690969547, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (54, 1, '编辑表', '{\"table\":\"rt_ding_role\",\"field\":\"Comment\",\"value\":\"钉钉角色\",\"old\":\"rt_ding_role\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/editTable', 'POST', 1690969556, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (55, 1, '编辑表', '{\"table\":\"rt_ding_user\",\"field\":\"Comment\",\"value\":\"钉钉用户\",\"old\":\"rt_ding_user\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/editTable', 'POST', 1690969563, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (56, 1, '编辑表', '{\"table\":\"rt_ding_dept\",\"field\":\"Auto_increment\",\"value\":\"1\",\"old\":\"钉钉部门\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/editTable', 'POST', 1690969585, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (57, 1, '更换数据库', '{\"id\":\"2\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/confChange', 'POST', 1690969832, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (58, 1, '执行sql', '{\"code\":\"select * from rt_adminlog\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/db/runSql', 'POST', 1690969875, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (59, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"29\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1691028091, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (60, 1, '编辑菜单', '{\"title\":\"管理员添加前\",\"route\":\"admin/addBefore\",\"href\":\"\",\"icon\":\"layui-icon layui-icon-at\",\"type\":\"3\",\"order_num\":\"0\",\"id\":\"62\",\"pid\":\"11\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/edit', 'POST', 1691028480, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (61, 1, '添加菜单', '{\"title\":\"修改密码\",\"route\":\"admin/changepwd\",\"href\":\"admin/changepwd.html\",\"icon\":\"layui-icon layui-icon-component\",\"type\":\"2\",\"order_num\":\"0\",\"pid\":\"11\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/menu/add', 'POST', 1691028532, 'admin_op', 0);
INSERT INTO `rt_adminlog` VALUES (62, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"29\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1691028539, 'admin_login', 0);
INSERT INTO `rt_adminlog` VALUES (63, 1, 'admin用户登录', '{\"username\":\"admin\",\"captcha\":\"56\"}', '::ffff:127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0', '/login/loginIn', 'POST', 1691028880, 'admin_login', 0);
COMMIT;

-- ----------------------------
-- Table structure for rt_database
-- ----------------------------
DROP TABLE IF EXISTS `rt_database`;
CREATE TABLE `rt_database` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `database` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `host` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `port` int(10) unsigned NOT NULL DEFAULT '3306',
  `user` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateStrings` tinyint(2) unsigned DEFAULT NULL,
  `encoding` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isdef` tinyint(2) unsigned DEFAULT '0',
  `prefix` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ssh` tinyint(2) unsigned DEFAULT NULL,
  `shost` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sport` int(10) unsigned DEFAULT '22',
  `suser` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stype` tinyint(2) unsigned DEFAULT '1',
  `spass` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spath` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='数据库连接表';

-- ----------------------------
-- Records of rt_database
-- ----------------------------
BEGIN;
INSERT INTO `rt_database` VALUES (1, 'gdcms', '127.0.0.1', 8889, 'root', 'root', 0, 'utf8', 0, 'rt_', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `rt_database` VALUES (2, 'gododb', '127.0.0.1', 3306, 'root', 'root', 0, 'utf8', 1, 'rt_', 0, '127.0.0.1', 22, 'root', 1, '', '');
COMMIT;

-- ----------------------------
-- Table structure for rt_datasafe
-- ----------------------------
DROP TABLE IF EXISTS `rt_datasafe`;
CREATE TABLE `rt_datasafe` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `data_id` int(10) DEFAULT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `data_id` (`data_id`,`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='数据库保护表';

-- ----------------------------
-- Records of rt_datasafe
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rt_menu
-- ----------------------------
DROP TABLE IF EXISTS `rt_menu`;
CREATE TABLE `rt_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '权限标志',
  `href` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '前端地址',
  `type` tinyint(2) DEFAULT '0' COMMENT '0目录1菜单2按钮3权限',
  `order_num` int(10) DEFAULT '0' COMMENT '排序',
  `icon` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `open_type` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pid` int(10) DEFAULT '0',
  `lid` tinyint(3) DEFAULT '1',
  `ifshow` tinyint(3) unsigned DEFAULT '0' COMMENT '是否显示0显示1不显示',
  `desktop` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '桌面推荐',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `url` (`route`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=293 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='系统菜单';

-- ----------------------------
-- Records of rt_menu
-- ----------------------------
BEGIN;
INSERT INTO `rt_menu` VALUES (2, '数据库管理', 'sys', 'system', '', 1, 2, 'layui-icon layui-icon-set', '_self', 0, 0, 0, 0);
INSERT INTO `rt_menu` VALUES (3, '权限管理', 'auth', 'auth', '', 1, 3, 'layui-icon layui-icon-vercode', '_self', 0, 0, 0, 0);
INSERT INTO `rt_menu` VALUES (6, '首页', 'sys', 'index/welcome', 'index/welcome.html', 1, 1, 'layui-icon layui-icon-at', '_self', 0, 0, 0, 0);
INSERT INTO `rt_menu` VALUES (9, '菜单管理', 'menu', 'menu/oplist', 'menu/index.html', 1, 1, 'layui-icon layui-icon-gift', '_self', 3, 1, 0, 1);
INSERT INTO `rt_menu` VALUES (10, '角色管理', 'auth', 'auth/list', 'auth/index.html', 1, 10, 'layui-icon layui-icon-service', '_self', 3, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (11, '管理员管理', 'admin', 'admin/list', 'admin/list.html', 1, 11, 'layui-icon layui-icon-key', '_self', 3, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (12, '日志管理', 'logs', 'logs/list', 'logs/list.html', 1, 12, 'layui-icon layui-icon-spread-left', '_self', 2, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (15, '前端菜单', 'menu', 'menu/list', '', 3, 0, 'layui-icon layui-icon-transfer', NULL, 6, 1, 1, 0);
INSERT INTO `rt_menu` VALUES (20, '新增菜单', 'menu', 'menu/add', '', 2, 20, 'layui-icon layui-icon-cols', '_self', 9, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (21, '编辑菜单', 'menu', 'menu/edit', '', 2, 20, 'layui-icon layui-icon-add-1', '_self', 9, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (22, '删除菜单', 'menu', 'menu/del', '', 2, 21, 'layui-icon layui-icon-delete', '_self', 9, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (23, '查看菜单', 'menu', 'menu/one', '', 3, 20, 'layui-icon layui-icon-slider', '_self', 9, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (24, '编辑管理员', 'admin', 'admin/edit', '', 2, 20, 'layui-icon layui-icon-time', '_self', 11, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (25, '删除管理员', 'admin', 'admin/del', '', 2, 21, 'layui-icon layui-icon-more-vertical', '_self', 11, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (26, '编辑角色', 'auth', 'auth/edit', '', 2, 22, 'layui-icon layui-icon-key', '_self', 10, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (27, '删除角色', 'auth', 'auth/del', '', 2, 23, 'layui-icon layui-icon-mute', '_self', 10, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (35, '数据库设计', 'db', 'db/list', 'db/list.html', 1, 3, 'layui-icon layui-icon-template-1', '_self', 2, 1, 0, 1);
INSERT INTO `rt_menu` VALUES (56, '查看角色', 'auth', 'auth/one', '', 2, 0, 'layui-icon layui-icon-camera', NULL, 10, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (57, '菜单显示', 'menu', 'menu/ifshow', '', 2, 0, 'layui-icon layui-icon-mike', NULL, 9, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (58, '添加查看菜单', 'auth', 'auth/addTree', '', 3, 1, 'layui-icon layui-icon-heart-fill', NULL, 10, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (59, '添加角色', 'auth', 'auth/add', '', 2, 1, 'layui-icon layui-icon-logout', NULL, 10, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (60, '角色编辑前', 'auth', 'auth/beforEdit', '', 3, 0, 'layui-icon layui-icon-email', NULL, 10, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (61, '设置角色可用', 'auth', 'auth/enable', '', 2, 0, 'layui-icon layui-icon-at', NULL, 10, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (62, '管理员添加前', 'admin', 'admin/addBefore', '', 3, 0, 'layui-icon layui-icon-at', NULL, 11, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (63, '添加管理员', 'admin', 'admin/add', '', 2, 0, 'layui-icon layui-icon-windows', NULL, 11, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (64, '管理员编辑前', 'admin', 'admin/editBefore', '', 3, 0, 'layui-icon layui-icon-export', NULL, 11, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (65, '管理员启用禁用', 'admin', 'admin/enable', '', 2, 0, 'layui-icon layui-icon-slider', NULL, 11, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (88, '更新表缓存', NULL, 'db/update', '', 2, 0, 'layui-icon layui-icon-refresh', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (89, '备份数据', NULL, 'db/backup', '', 2, 0, 'layui-icon layui-icon-templeate-1', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (90, '还原数据列表', NULL, 'db/backupFile', '', 2, 0, 'layui-icon layui-icon-list', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (91, '数据还原', NULL, 'db/reback', '', 2, 0, 'layui-icon layui-icon-water', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (92, '删除备份', NULL, 'db/delback', '', 2, 0, 'layui-icon layui-icon-down', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (93, '数据库文档', NULL, 'db/doc', '', 2, 0, 'layui-icon layui-icon-service', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (94, '编辑列表内容', NULL, 'db/editTable', '', 2, 0, 'layui-icon layui-icon-link', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (95, '优化表', NULL, 'db/optimize', '', 2, 0, 'layui-icon layui-icon-rss', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (96, '修复表', NULL, 'db/repair', '', 2, 0, 'layui-icon layui-icon-rate-solid', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (97, '删除表', NULL, 'db/delTable', '', 2, 0, 'layui-icon layui-icon-subtraction', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (98, '清空表', NULL, 'db/clear', '', 2, 0, 'layui-icon layui-icon-unlink', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (99, '字段列表', NULL, 'db/fieldList', '', 2, 0, 'layui-icon layui-icon-star-fill', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (100, '展示表数据', NULL, 'db/listData', '', 2, 0, 'layui-icon layui-icon-transfer', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (101, '编辑数据', NULL, 'db/editData', '', 3, 0, 'layui-icon layui-icon-mike', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (102, '删除数据', NULL, 'db/delData', '', 2, 0, 'layui-icon layui-icon-fonts-del', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (103, '数据库字段列表', NULL, 'db/fields', 'db/edit.html', 2, 0, 'layui-icon layui-icon-auz', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (104, '删除字段', NULL, 'db/delField', '', 2, 0, 'layui-icon layui-icon-subtraction', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (105, '字段排序', NULL, 'db/sortField', '', 2, 0, 'layui-icon layui-icon-slider', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (106, '更改字段名', NULL, 'db/changeFieldName', '', 2, 0, 'layui-icon layui-icon-find-fill', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (107, '设置字段', NULL, 'db/setStatus', '', 2, 0, 'layui-icon layui-icon-camera', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (108, '添加字段', NULL, 'db/addField', '', 2, 0, 'layui-icon layui-icon-website', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (109, '表索引列表', NULL, 'db/keysList', '', 2, 0, 'layui-icon layui-icon-wifi', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (110, '删除索引', NULL, 'db/delKey', '', 2, 0, 'layui-icon layui-icon-download-circle', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (111, '设置索引', NULL, 'db/setKey', '', 2, 0, 'layui-icon layui-icon-layer', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (112, '创建表', NULL, 'db/createTable', '', 2, 0, 'layui-icon layui-icon-transfer', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (113, '复制表', NULL, 'db/opcopy', '', 2, 0, 'layui-icon layui-icon-fonts-clear', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (114, '执行Sql', NULL, 'db/runSql', '', 2, 0, 'layui-icon layui-icon-light', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (115, '获取创建Sql', NULL, 'db/getSql', '', 2, 0, 'layui-icon layui-icon-service', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (122, '批量删除表', NULL, 'db/batchRemove', '', 2, 0, 'layui-icon layui-icon-fonts-del', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (130, '添加数据', NULL, 'db/addData', 'db/data-add.html', 2, 0, 'layui-icon layui-icon-mike', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (131, '数据库列表', NULL, 'db/confList', 'db/conf.html', 1, 0, 'layui-icon layui-icon-wifi', NULL, 2, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (132, '添加数据库', NULL, 'db/confAdd', '', 2, 0, 'layui-icon layui-icon-email', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (133, '编辑数据库', NULL, 'db/confEdit', '', 2, 0, 'layui-icon layui-icon-rss', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (134, '测试数据库连接', NULL, 'db/confTest', '', 2, 0, 'layui-icon layui-icon-logout', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (135, '删除数据库', NULL, 'db/confDel', '', 2, 0, 'layui-icon layui-icon-subtraction', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (136, '更换数据库', NULL, 'db/confChange', '', 2, 0, 'layui-icon layui-icon-transfer', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (137, '编辑数据库前', NULL, 'db/confEditBefore', '', 3, 0, 'layui-icon layui-icon-snowflake', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (138, '保护列表', NULL, 'db/safeList', '', 2, 0, 'layui-icon layui-icon-camera', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (139, '添加保护', NULL, 'db/safeAdd', '', 2, 0, 'layui-icon layui-icon-addition', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (140, '删除保护', NULL, 'db/safeDel', '', 2, 0, 'layui-icon layui-icon-subtraction', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (141, '添加数据库', NULL, 'db/creatDatabase', '', 2, 0, 'layui-icon layui-icon-align-left', NULL, 35, 1, 0, 0);
INSERT INTO `rt_menu` VALUES (142, '编辑菜单数据', 'menu', 'menu/editData', '', 3, 20, 'layui-icon layui-icon-add-1', '_self', 9, 2, 0, 0);
INSERT INTO `rt_menu` VALUES (291, '判断登录', NULL, 'auth/isLogin', '', 3, 0, 'layui-icon layui-icon-username', NULL, 6, 1, 1, 0);
INSERT INTO `rt_menu` VALUES (292, '修改密码', NULL, 'admin/changepwd', 'admin/changepwd.html', 2, 0, 'layui-icon layui-icon-component', NULL, 11, 1, 0, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
