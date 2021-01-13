var Show = {
  arr: [],
  num: 6,
  pre_init: function () {
    document.head.innerHTML = `
      <title>云开发实时消息看板</title>
      <meta charset="UTF-8">
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'>`

    Show.loadheadfile('res/show.css', 'css')
    Show.loadheadfile('https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js', 'js')

    if (window.onload == null) {
      window.onload = function () {
        Show.init()
      }
    }
  },
  init () {
    document.body.innerHTML = `
      <div class="title">云开发实时弹幕消息展示看板</div>
      <div id="list"></div>`
    Show.list = document.getElementById('list')
  },
  excute (snapshot) {
    if (snapshot.msgType === 'INIT_EVENT') {
      const num = (Show.num > snapshot.docs.length) ? snapshot.docs.length : Show.num
      for (let i = 0; i < num; i++) {
        Show.additem(snapshot.docs[num - 1 - i])
      }
    } else {
      for (const i in snapshot.docChanges) {
        Show.additem(snapshot.docChanges[i].doc)
      }
    }
  },
  additem (info) {
    const item = document.createElement('div')
    item.setAttribute('class', 'item additem')
    item.id = info._id
    item.innerHTML = `
        <div class="user">
          <img src="${info.avatarUrl}"/>
          <div class="nick">${info.nickName}</div>
        </div>
        <div class="text">${info.text}<div>
      `
    Show.list.insertBefore(item, Show.list.firstChild)
    Show.arr.push(info._id)
    if (Show.arr.length > Show.num) {
      Show.hideitem(Show.arr[0])
      Show.arr.shift()
    }
  },
  hideitem (id) {
    const item = document.getElementById(id)
    item.setAttribute('class', 'item removeitem')
    setTimeout(function () {
      Show.list.removeChild(item)
    }, 2000)
  },
  loadheadfile (filename, filetype) {
    let fileref = null
    if (filetype === 'js') {
      fileref = document.createElement('script')
      fileref.setAttribute('type', 'text/javascript')
      fileref.setAttribute('src', filename)
    } else if (filetype === 'css') {
      fileref = document.createElement('link')
      fileref.setAttribute('rel', 'stylesheet')
      fileref.setAttribute('type', 'text/css')
      fileref.setAttribute('href', filename)
    }
    if (typeof fileref !== 'undefined') {
      document.getElementsByTagName('head')[0].appendChild(fileref)
    }
  }
}
Show.pre_init()
