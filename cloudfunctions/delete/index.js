const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  // 删除特定条件的消息
  db.collection('mess').where({
    // 当前时间的前10分钟
    date: _.lt(db.serverDate({
      offset: -600000
    }))
  }).remove()
}
