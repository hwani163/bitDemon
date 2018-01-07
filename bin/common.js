//
const DbConnector = require('./dbConnector');
const db = new DbConnector();


async function getGenlCd(cd){
  const result = await db.selectQuery("SELECT GENL_VALUE FROM GENL_CD WHERE GENL_CD IN('"+cd+"') AND STTUS_CD='Y'");
  return parser(result);
}

async function getCoinList(){
  const result = await this.getGenlCd('COIN');
  return result;
}

function parser(row){
  let returnValue=null;
  if (row.length < 2) {
    returnValue = row[0].GENL_VALUE;
    console.log(returnValue);
    return returnValue;
  }else{
    returnValue = new Array();
    for (let i in row) {
      returnValue.push(row[i].GENL_VALUE);
    }
    return returnValue;
  }

}

exports.getGenlCd = getGenlCd;
exports.getCoinList = getCoinList;
