const config = require('./config')
const con = config.full

function Update(table,set,where){
const x = con.connect(function(err) {
    where = `WHERE ${where}` || ''
    if (err) throw err;
    var sql = `UPDATE [${table}] SET ${set} ${where}`;
    const y = con.query(sql, function (err, result) {
      if (err) throw err;
      return result.affectedRows + " record(s) updated!";
    });
    return y;
  });
  return x;
}

module.exports = Update

//set = "address = 'Canyon 123'"