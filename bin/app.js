(async function () {
 const Bithumb = require('bithumb.js')
 const moment = require('moment');
 const math = require('./mathModule.js');
 const common = require('./common.js');
 const DbConnector = require('./dbConnector');
 const db = new DbConnector();
 const connect_Key = await common.getGenlCd("CONNECT_KEY");
 const secret_Key = await common.getGenlCd("SECRET_KEY");
 const bithumb = new Bithumb(connect_Key,secret_Key);
 const coins = await common.getCoinList();









  setInterval(function(){
    (async function () {
      console.log("letsgo");
      const ticker = await bithumb.getTicker("ALL");
      if(ticker.status=='0000'){
        console.log(ticker.status);
        let param = new Array();
        let unixDate=ticker.data.date;
        let yyyy=moment(parseInt(unixDate)).format('YYYY');
        let mm=moment(parseInt(unixDate)).format('MM');
        let dd=moment(parseInt(unixDate)).format('DD');
        let hh=moment(parseInt(unixDate)).format('hh');
        let min=moment(parseInt(unixDate)).format('mm');

        param.push({'table':'BTC_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.BTC.sell_price});
        param.push({'table':'ETH_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.ETH.sell_price});
        param.push({'table':'DASH_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.DASH.sell_price});
        param.push({'table':'LTC_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.LTC.sell_price});
        param.push({'table':'ETC_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.ETC.sell_price});
        param.push({'table':'XRP_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.XRP.sell_price});
        param.push({'table':'BCH_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.BCH.sell_price});
        param.push({'table':'XMR_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.XMR.sell_price});
        param.push({'table':'ZEC_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.ZEC.sell_price});
        param.push({'table':'QTUM_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.QTUM.sell_price});
        param.push({'table':'BTG_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.BTG.sell_price});
        param.push({'table':'EOS_price','dt':unixDate,'year':yyyy,'mm':mm,'dd':dd,'hh':hh,'min':min,'price':ticker.data.EOS.sell_price});

        for (var i in param) {
          sql = "INSERT INTO "+param[i].table+" VALUES("+param[i].dt+",'"+param[i].year+"','"+param[i].mm+"','"+param[i].dd+"','"+param[i].hh+"','"+param[i].min+"','"+param[i].price+"')";
          const result = await db.selectQuery(sql);
        }

      }else{
        console.log("API Error"+ticker.status);
      }

        }());
  },1000);




function run(){








  }
  }());
