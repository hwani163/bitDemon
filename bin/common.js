//
const DbConnector = require('./dbConnector');



async function getGenlCd(cd){
  const db = new DbConnector();
  let returnValue;
  const result = await db.selectQuery("SELECT GENL_CD,GENL_VALUE FROM GENL_CD WHERE GENL_CD IN('"+cd+"') AND STTUS_CD='Y'");

  return result;
}


exports.getGenlCd = getGenlCd;
