/** Created by 31325_000 on 2017/12/13...*/
const mysql = require('mysql')
const pool = mysql.createPool({
    host    : 'localhost',
    user    : 'root',
    password: '001208',
    database: 'fed',
    port    : 8888
})

/*pool.getConnection(function(err, connection){
    if(err) throw err
    connection.query('SELECT 1 + 1 AS solution', function(err, resu, fields){
        console.log(connection.escapeId('select'))
        connection.destroy()
    })
})*/

console.log(mysql.format('SELECT ? FROM ? WHERE age = ?', ['username', mysql.raw('CURDATE()'), 22]))
console.log(mysql.raw('CURDATE()'))