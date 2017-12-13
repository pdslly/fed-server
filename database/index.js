/** Created by 31325_000 on 2017/12/13...*/
const mysql = require('mysql')
const pool = mysql.createPool({
    host    : 'localhost',
    user    : 'root',
    password: '001208',
    database: 'fed'
})