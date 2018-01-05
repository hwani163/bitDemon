/**
 * Created by Seokhwan on 2017. 6. 24..
 */
 const Bithumb = require('bithumb.js')
 const bithumb = new Bithumb('807feeccd34ab75e26776950a361dc15', '8d88a14baf30bbd98a023fc9b29b98d6');


// let dbtools = require('./dbtools.js');
let math = require('./mathModule.js');
let moment = require('moment');

const cron = require('node-cron');
const mysql = require('promise-mysql');
const coins = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];


cron.schedule('*/2 * * * * *', function(){
  console.log('작업 실행');
  run();
});


function run(){



          (async function () {
            for (var i in coins) {
            const ticker = await bithumb.getTicker(coins[i]);
            console.log(ticker);
            let avg = ticker.data.sell_price;
              let query = "INSERT INTO "+coins[i]+"_PRICE VALUES(now(),'"+avg+"')";

              mysql.createConnection({
                  host: 'localhost',
                  user: 'root',
                  password: '',
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
