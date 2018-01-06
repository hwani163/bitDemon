const mysql = require('promise-mysql');

let getGenlCd = function(genl_cd){
  let returnValue;
  mysql.createConnection({
      host: '127.0.0.1',
      user: 'APP',
      password: 'qwer1234',
      database: 'bit'
    }).then(conn => {
      var qeryresult = conn.query("SELECT GENL_CD,GENL_VALUE FROM GENL_CD WHERE GENL_CD IN('"+genl_cd+"') AND STTUS_CD='Y'");
      conn.end();
      return qeryresult;
    }).then(rows => {
      returnValue = rows;
    });

    return returnValue;
}

exports.getGenlCd = getGenlCd;
