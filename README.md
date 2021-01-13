# 实时消息展板——腾讯云·云开发Techo大会演示项目

## 项目介绍

采用云开发后端服务打造的实时消息展板程序。

使用小程序的客服消息能力发送消息，实时在WEB展板页面中展示，用于现场互动等多种玩法场景。

演示地址：[f.cloudbase.vip](https://f.cloudbase.vip)


## 部署步骤

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2FTCloudBase%2FWXAPP-WEB-ShowMess&branch=master)

**注意：一键部署之后还需要操作下述步骤中第5步**

**在部署成功之后，控制台会显示访问按钮，点击即可进入WEB页面应用**

**小程序访问需要微信搜索「小程序助手」，进入后选择以上部署的小程序-「版本管理」-「开发版」中会有CI机器人提交的最新版本，点击之后即可进入小程序**

1. 小程序开发者工具打开此项目

2. 确定云开发环境（按量付费）最好有一个全新的按量付费小程序

3. 将项目下载后打开，cloudfunctions存放云函数代码，miniprogram存放小程序代码，webview存放WEB应用代码

4. 将cloudfunctions目录下三个云函数创建上传并云端安装依赖。delete云函数需要上传触发器

5. 在小程序云开发控制台中【设置-全局设置-添加消息推送】选择text类型对接到contact云函数

6. 创建数据库mess（权限设置为：所有人可读）、user（权限设置为：近管理员可写）

7. 在微信开发者工具中正常预览小程序（如果提示找不到云函数，则是环境指向问题，在app.js中设置envid）

8.  webview/index.html 需要调整一下代码，并补充自己的云开发环境ID

9. 将 webview 内所有文件全部上传至静态托管根目录（先开通静态网站托管）

## 参考文档

- [云开发官网](https://www.cloudbase.net/)

## 作者

- 腾讯云·云开发团队官方出品

