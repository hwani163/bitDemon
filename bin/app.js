/**
 * Created by Seokhwan on 2017. 6. 24..
 */
 const Bithumb = require('bithumb.js')
 const cron = require('node-cron');
 const mysql = require('promise-mysql');
 const coins = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];
 let math = require('./mathModule.js');
 let common = require('./common.js');
 let secretKey=null;
 let generalKey=null;




const bithumb = new Bithumb(common.getGenlCd('SECRET_KEY'), common.getGenlCd('GENERAL_KEY'));



// while (true) {

  setInterval(function(){
    run();
  },1000);
// };



function run(){

          (async function () {
            for (var i in coins) {
            const ticker = await bithumb.getTicker(coins[i]);
            let avg = ticker.data.sell_price;
            let date = ticker.data.date;
            let query = "INSERT INTO "+coins[i]+"_PRICE VALUES("+date+",'"+avg+"')";

              mysql.createConnection({
                  host: '127.0.0.1',
                  user: 'APP',
                  password: 'qwer1234',
                  database: 'bit'
                }).then(conn => {
                  var qeryresult = conn.query(query);
                  conn.end();
                  return qeryresult;
                }).then(rows => {
                  // Logs out a list of hobbits
                  console.log(coins[i]+rows.affectedRows+'건 인서트 완료');
                });
              }

            }());



  }
