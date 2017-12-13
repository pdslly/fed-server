/** Created by lixiangyang on 2017/12/13...*/
const express = require('express')

const Router = express.Router()

Router.get('/', function(req, res){
    res.end('hello world')
})

module.exports = Router