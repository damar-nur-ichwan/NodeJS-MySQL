const config = require('./config')
const con = config.full

function DeleteTable(table,schema){
    const x = con.connect(function(err) {
        if (err) throw err;
        var sql = `CREATE TABLE [${table}] (${schema})`;
        const y = con.query(sql, function (err, result) {
          if (err) throw err;
          return "Table deleted!";
        });
        return y;
      });
      return x;
}

module.exports = DeleteTable

// "name VARCHAR(255), address VARCHAR(255)"