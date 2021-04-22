const config = require('./config')
const con = config.full

function DropTable(table){
    const x = con.connect(function(err) {
        if (err) throw err;
        var sql = `DROP TABLE [${table}]`;
        const y = con.query(sql, function (err, result) {
          if (err) throw err;
          return "Table dropped!";
        });
        return y;
      });
      return x;
}

module.exports = DropTable