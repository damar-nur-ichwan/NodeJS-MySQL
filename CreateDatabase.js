const config = require('./config')
const con = config.withoutDB

function CreateDatabase(database){
    const x = con.connect(function(err) {
        if (err) throw err;
        const y = con.query(`CREATE DATABASE ${database}`, function (err, result) {
          if (err) throw err;
          return "Database created!"
        });
        return y;
      });
      return x;
}
module.exports = CreateDatabase