/** Created by lixiangyang on 2017/12/13...*/
const express = require('express')
const app = express()
const config = require('./config/index')
const chalk = require('chalk')
const router = require('./router/index')
const {debug, info, error} = require('./middlewave/logger')

app.use(router)

debug('hello world')
info('hello world')

module.exports = app.listen(config.PORT, function(err){
    if(err) throw err
    let {address, port} = this.address()
    console.log(`info: server started at ${chalk.bgGreen.white('http://' + address + ':' + port)}`)
})
