const config = require('./config')
const con = config.full

function Select(table,column, where){
    const x = con.connect(function(err) {
        where = `WHERE ${where}` || ''
        if (err) throw err;
        const y = con.query(`SELECT (${column}) FROM [${table}] ${where}`, function (err, result, fields) {
          if (err) throw err;
          return result;
        });
        return y
      });
      return x
}

module.exports = Select