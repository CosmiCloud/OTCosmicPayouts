require('dotenv').config();
const util = require('util');
const exec = util.promisify(require('child_process').exec);

try{

  async function payout(){
      if(process.env.ETHEREUM == 'YES'){
        var jerbs = "sudo curl -X GET https://v5api.othub.info/api/Payouts/getofferidsforpayout/"+process.env.ETH_ERC725ID
        var jerbs = await exec(jerbs);
        var jerbs = JSON.parse(jerbs.stdout);
        console.log(jerbs);

        var offer_id = jerbs[i].OfferId
        //var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
        //var result = await exec(payout_com);
        console.log('\x1b[32m','Triggered eth payout for offer '+jerbs[i].OfferId);
        //console.log('\x1b[33m',result.stdout);

      }else if(process.env.XDAI == 'YES'){
        var jerbs = 'sudo curl -X GET https://v5api.othub.info/api/Payouts/getofferidsforpayout/'+process.env.XDAI_ERC725ID+'?ignoreWithPayoutsInLastXDays=-1 -H "accept: */*"'
        var jerbs = await exec(jerbs);
        var jerbs = JSON.parse(jerbs.stdout);
        console.log(jerbs.length)

        for(var i = 0; i < (jerbs.length); i++) {
            var offer_id = jerbs[i]
            //var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
            //var result = await exec(payout_com);
            console.log('\x1b[32m','Triggered xdai payout for offer '+offer_id);
            //console.log('\x1b[33m',result.stdout);
        }

      }else if(process.env.POLYGON == 'YES'){
        var jerbs = "sudo curl -X GET https://v5api.othub.info/api/Payouts/getofferidsforpayout/"+process.env.POLY_ERC725ID
        var jerbs = await exec(jerbs);
        var jerbs = JSON.parse(jerbs.stdout);
        console.log(jerbs);

        var offer_id = jerbs[i].OfferId
        // var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
        // var result = await exec(payout_com);
        console.log('\x1b[32m','Triggered polygon payout for offer '+jerbs[i].OfferId);
        // console.log('\x1b[33m',result.stdout);

      }else{
        //console.log('\x1b[35m','Skipped payout for offer '+jerbs[i])
      }
    }
  payout();
}catch(e){
  console.log(e);
}
