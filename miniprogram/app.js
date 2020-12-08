// app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      // env: '指定环境ID',
      traceUser: true
    })
  }
})
