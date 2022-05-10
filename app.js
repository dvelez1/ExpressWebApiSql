const sql = require('mssql/msnodesqlv8')
//msnodesqlv8 module is requiered for Windows Authentication without using Username and Password


const pool = new sql.ConnectionPool({
  database: 'Tarea',
  server: 'LENOVO\\SQLEXPRESS',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

pool.connect().then(() => {
  //simple query
  var queryString = 'select TOP(1) Id,Nombre,Estado  from dbo.Tareas';
  pool.request().query(queryString, (err, result) => {
    if(err)
    console.log(err)
    else 
        console.dir(result)
    })
})

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

// app.post('/submit-data', function (req, res) {
//     res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });