/**
 * Created by Seokhwan on 2017. 7. 2..
 */


let buyMaxValue = function(arr){
  let tmpArry = new Array();
  for (var i = 0; i < arr.asks.length; i++) {
    tmpArry.push(arr.asks[i].price);
  }
  let maxValue = tmpArry.reduce( function (previous, current) {
	   return previous > current ? previous:current;
  });
  return maxValue;
};

let sellMaxValue = function(arr){
  let tmpArry = new Array();
  for (var i = 0; i < arr.asks.length; i++) {
    tmpArry.push(arr.asks[i].price);
  }
  let maxValue = tmpArry.reduce( function (previous, current) {
	   return previous < current ? previous:current;
  });
    return maxValue;
};
exports.sellMaxValue = sellMaxValue;
exports.buyMaxValue = buyMaxValue;
