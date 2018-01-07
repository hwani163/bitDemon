(async function () {
 const Bithumb = require('bithumb.js')
 const coins = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];
 const math = require('./mathModule.js');
 const common = require('./common.js');
 const DbConnector = require('./dbConnector');
 const db = new DbConnector();
 const connect_Key = await common.getGenlCd("CONNECT_KEY");
 const secret_Key = await common.getGenlCd("SECRET_KEY");
 const bithumb = new Bithumb(connect_Key,secret_Key);








  setInterval(function(){
    (async function () {
      console.log("letsgo");
      const ticker = await bithumb.getTicker("ALL");
      if(ticker.status=='0000'){
        console.log(ticker.status);
        let param = new Array();
        param.push(['BTC_price',ticker.data.BTC.sell_price,ticker.data.date]);
        param.push(['ETH_price',ticker.data.ETH.sell_price,ticker.data.date]);
        param.push(['DASH_price',ticker.data.DASH.sell_price,ticker.data.date]);
        param.push(['LTC_price',ticker.data.LTC.sell_price,ticker.data.date]);
        param.push(['ETC_price',ticker.data.ETC.sell_price,ticker.data.date]);
        param.push(['XRP_price',ticker.data.XRP.sell_price,ticker.data.date]);
        param.push(['BCH_price',ticker.data.BCH.sell_price,ticker.data.date]);
        param.push(['XMR_price',ticker.data.XMR.sell_price,ticker.data.date]);
        param.push(['ZEC_price',ticker.data.ZEC.sell_price,ticker.data.date]);
        param.push(['QTUM_price',ticker.data.QTUM.sell_price,ticker.data.date]);
        param.push(['BTG_price',ticker.data.BTG.sell_price,ticker.data.date]);
        param.push(['EOS_price',ticker.data.EOS.sell_price,ticker.data.date]);
        for (var i in param) {
          const result = await db.selectQuery("INSERT INTO "+param[i][0]+" VALUES("+[param[i][2]+","+param[i][1]]+")");
        }

      }else{
        console.log("API Error"+ticker.status);
      }

        }());
  },1000);




function run(){








  }
  }());
