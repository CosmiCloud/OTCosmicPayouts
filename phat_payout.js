require('dotenv').config();
const util = require('util');
const exec = util.promisify(require('child_process').exec);

try{

  async function payout(){
    var jerbs = "sudo curl -X GET https://v5api.othub.info/api/nodes/DataHolder/"+process.env.NODE_ID+"/jobs"
    var jerbs = await exec(jerbs);
    var jerbs = JSON.parse(jerbs.stdout);

    for(var i = 0; i < (jerbs.length); i++) {
      if(jerbs[i].BlockchainID == "1" && process.env.ETHEREUM == 'YES' && jerbs[i].Paidout == false){
        var offer_id = jerbs[i].OfferId
        var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
        var result = await exec(payout_com);
        console.log('\x1b[32m','Triggered eth payout for offer '+jerbs[i].OfferId);
        console.log('\x1b[33m',result.stdout);

      }else if(jerbs[i].BlockchainID == "2" && process.env.XDAI == 'YES' && jerbs[i].Paidout == false){
        var offer_id = jerbs[i].OfferId
        var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
        var result = await exec(payout_com);
        console.log('\x1b[32m','Triggered xdai payout for offer '+jerbs[i].OfferId);
        console.log('\x1b[33m',result.stdout);

      }else if(jerbs[i].BlockchainID == "3" && process.env.POLYGON == 'YES' && jerbs[i].Paidout == false){
        var offer_id = jerbs[i].OfferId
        var payout_com = "curl -s -X GET http://127.0.0.1:8900/api/latest/payout?offer_id="+offer_id
        var result = await exec(payout_com);
        console.log('\x1b[32m','Triggered polygon payout for offer '+jerbs[i].OfferId);
        console.log('\x1b[33m',result.stdout);

      }else{
        console.log('\x1b[35m','Skipped payout for offer '+jerbs[i].OfferId)
      }
    }

  }
  payout();
}catch(e){
  console.log(e);
}
