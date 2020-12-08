const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  // 获取用户信息-数据库
  const result = (await db.collection('user').where({
    _id: event.userInfo.openId
  }).get()).data
  // 如果存在信息
  if (result.length !== 0) {
    // 更新用户信息-数据库
    await db.collection('user').doc(event.userInfo.openId).update({
      data: {
        ...event.info
      }
    })
  } else {
    // 新增用户信息-数据库
    await db.collection('user').add({
      data: {
        _id: event.userInfo.openId,
        ...event.info
      }
    })
  }
  return 0
}
