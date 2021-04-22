const config = require('./config')
const con = config.full

function Insert(table,colomn, value, where){
const x = con.connect(function(err) {
    where = `WHERE ${where}` || ''
    if (err) throw err;
    var sql = `INSERT INTO [${table}] (${colomn}) VALUES (${value}) ${where}`;
    const y = con.query(sql, function (err, result) {
      if (err) throw err;
      return "Data inserted!"
    });
    return y;
  });
  return x;
}

module.exports = Insert