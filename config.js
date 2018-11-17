'use strict'

module.exports = {
  port : process.env.PORT || 3000 ,
  dbUrl : process.env.DBURL || 'mongodb://172.17.0.2:27017/users'

}
