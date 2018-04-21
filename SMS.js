const config = require('./config');

class SMS {
  constructor(accountSid, authToken, myNumber) {
    this.accountSid = config.accountSid;
    this.authToken = config.authToken;
    this.myNumber = config.myNumber;
  }

  enviaSMS(numero, msg) {
    const client = require('twilio')(this.accountSid, this.authToken)
    
    client.messages.create({
      to: numero,
      from: this.myNumber,
      body: msg  
    }).then((message) => console.log(message.sid))
  }
}

module.exports = SMS;

