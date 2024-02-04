let axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    if(!global.accessToken){
        const data = await axios.post(
            "https://api.nimbuspost.com/v1/users/login",{
            "email" : "ajayshekar01@gmail.com",
            "password" : "Jenvi_0102"
            }
        );
        console.log(`login data is ${data}`);
        global.accessToken = data.data.data;
    }
    next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};