
let express = require('express'); 
let cors = require('cors'); 
let bodyParser = require('body-parser'); 
let axios = require('axios');
const auth = require("./authMiddleware");
// Express Route 
// const studentRoute = require('../backend/routes/student.route') 
  
// Configure mongoDB Database 
// mongoose.set('useNewUrlParser', true); 
// mongoose.set('useFindAndModify', false); 
// mongoose.set('useCreateIndex', true); 
// mongoose.set('useUnifiedTopology', true); 
  
// // Connecting MongoDB Database 
// mongoose.Promise = global.Promise; 
// mongoose.connect(dbConfig.db).then(() => { 
//   console.log('Database successfully connected!') 
// }, 
//   error => { 
//     console.log('Could not connect to database : ' + error) 
//   } 
// ) 
  
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
  extended: true
})); 
app.use(cors()); 
app.use('/getWixOrders', async(req, res, next) => { 
  try{
    console.log(`req body is ${JSON.stringify(req.body)}`);
    const data = await axios.post(
    "https://www.wixapis.com/stores/v2/orders/query",req.body,
    {
      headers: {
        Authorization: `IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcImY3MjdlNDZhLWM0NDktNDcxNS05NjU2LWVhY2RkNjYxZjg3MVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjNkMGM2YmFkLTQzODktNDJiYy1hM2RmLWQ0MmJjMWE4ZWE0NVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNDg3NGE3YS1lZjAwLTRiYzctYWU4MC1hYTkwMmRhYTlhNWVcIn19IiwiaWF0IjoxNzAxODc3Mjk4fQ.BQYhDhMospDnZWnVZFy2_NU9WtJVn1_8uFfNyxvKQfZTkox14hI2OtcvSPk7mz_jnIgOAKWoJVksTsZKh8XwyY3jAaYuF7NmiDHQ-QyEacLzUOKc9YAayNyOyLQtnHV2cg1txV1bWQlffpp0ZtPNRzFyw9dyKarsIfigLs3MWNoL86uyc9NNiEvRBQEzVh1vnlLXDfzOzhoknutwUTp9GD6Uep_i9knr-HclmWLWrw4cZXawzPSywL-GYI1OaEx_7USvtexD2gcxAyTQRxmMuz_v9Vw1BnMFBngSDAQkHtB1UQfwJ0uXKQs-7-FtnCfHXrLnd2SjxcHlQHFYFI-19g`,
        'wix-site-id': '89793f6a-425e-441a-96b3-09aef0ea4125',
        // 'wix-account-id': '14874a7a-ef00-4bc7-ae80-aa902daa9a5e',
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(data);
  res.status(200).send(data.data.orders);
  } catch (error){
    console.error(error);
  }
}) 

app.use('/getShippingClientLists', auth, async(req, res, next) => {
  try{
  console.log(`req body is ${JSON.stringify(req.body)}`);
    const shipmentOrderDataList = await axios.post(
    "https://api.nimbuspost.com/v1/courier/serviceability",
    req.body,
    {
      headers: {
        Authorization: `Bearer ${global.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
    );
    console.log(shipmentOrderDataList);
    res.status(200).send(shipmentOrderDataList.data.data);
    } catch (error){
    console.error(error);
  }
})
  
app.use('/createShippingOrder', auth,async(req, res, next) => {
  try{
  console.log(`req body is ${JSON.stringify(req.body)}`);

    const shipmentOrderDataList = await axios.post(
    "https://api.nimbuspost.com/v1/shipments",
    req.body,
    {
      headers: {
        Authorization: `Bearer ${global.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
    );
    console.log(shipmentOrderDataList);
    res.status(200).send(shipmentOrderDataList.data);
    } catch (error){
    console.error(error);
  }
})

app.use('/updateShippingOrder', auth,async(req, res, next) => {
  try{
  console.log(`req body is ${JSON.stringify(req.body)}`);

    const shipmentOrderDataList = await axios.post(
    `https://www.wixapis.com/stores/v2/orders/${req.query.id}/fulfillments`,
    req.body,
    {
      headers: {
        Authorization: `IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcImY3MjdlNDZhLWM0NDktNDcxNS05NjU2LWVhY2RkNjYxZjg3MVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjNkMGM2YmFkLTQzODktNDJiYy1hM2RmLWQ0MmJjMWE4ZWE0NVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNDg3NGE3YS1lZjAwLTRiYzctYWU4MC1hYTkwMmRhYTlhNWVcIn19IiwiaWF0IjoxNzAxODc3Mjk4fQ.BQYhDhMospDnZWnVZFy2_NU9WtJVn1_8uFfNyxvKQfZTkox14hI2OtcvSPk7mz_jnIgOAKWoJVksTsZKh8XwyY3jAaYuF7NmiDHQ-QyEacLzUOKc9YAayNyOyLQtnHV2cg1txV1bWQlffpp0ZtPNRzFyw9dyKarsIfigLs3MWNoL86uyc9NNiEvRBQEzVh1vnlLXDfzOzhoknutwUTp9GD6Uep_i9knr-HclmWLWrw4cZXawzPSywL-GYI1OaEx_7USvtexD2gcxAyTQRxmMuz_v9Vw1BnMFBngSDAQkHtB1UQfwJ0uXKQs-7-FtnCfHXrLnd2SjxcHlQHFYFI-19g`,
        'wix-site-id': '89793f6a-425e-441a-96b3-09aef0ea4125',
        // 'wix-account-id': '14874a7a-ef00-4bc7-ae80-aa902daa9a5e',
        'Content-Type': 'application/json',
      },
    }
    );
    console.log(shipmentOrderDataList);
    res.status(200).send(shipmentOrderDataList.data);
  } catch (error){
    console.error(error);
  }
})

// PORT 
const port = process.env.PORT || 4000; 
const server = app.listen(port, () => { 
  console.log('Connected to port ' + port) 
}) 
  
// 404 Error 
app.use((req, res, next) => { 
  res.status(404).send('Error 404!') 
}); 
  
app.use(function (err, req, res, next) { 
  console.error(err.message); 
  if (!err.statusCode) err.statusCode = 500; 
  res.status(err.statusCode).send(err.message); 
});