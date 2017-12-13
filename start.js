/** Created by lixiangyang on 2017/12/13...*/
const express = require('express')
const app = express()
const config = require('./config/index')
const chalk = require('chalk')
const router = require('./router/index')
const {info} = require('./middlewave/logger')

app.use(router)

module.exports = app.listen(config.PORT, function(err){
    if(err) throw err
    let {address, port} = this.address()
    let addr = `server start at http://${address}:${port}`

    info(addr)
    console.log(`info: server started at ${chalk.bgGreen.white(addr)}`)
})
