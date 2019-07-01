
const axios = require('axios');
var moment = require('moment');
var datasetSevenDayCurrencyExchange={};

const URLGET=`https://api.privatbank.ua/p24api/exchange_rates?json`;


var actionsChain = Promise.resolve("");

for(var i=0; i<7; i++){

    let dateCurrExcange=  moment().subtract(i, 'days').format("DD.MM.YYYY");
    actionsChain = actionsChain.then(function(result){
   
        
        return axios.get(URLGET, {
            params: {
                date: dateCurrExcange
            } 
          })
          
          .then((response)=>  {                           
             datasetSevenDayCurrencyExchange = Object.assign(datasetSevenDayCurrencyExchange, response.data);
             // console.log(datasetSevenDayCurrencyExcange)    
             
              console.log(JSON.stringify(datasetSevenDayCurrencyExchange))
          
          } )

  });
}
