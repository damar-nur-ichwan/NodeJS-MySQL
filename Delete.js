const config = require('./config')
const con = config.full

function Delete(table,where){
const x = con.connect(function(err) {
    where = `WHERE ${where}` || ''
    if (err) throw err;
    var sql = `DELETE FROM [${table}] ${where}`;
    const y = con.query(sql, function (err, result) {
      if (err) throw err;
      return "Data deleted!"
    });
    return y;
  });
  return x;
}

module.exports = Delete