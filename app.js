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
