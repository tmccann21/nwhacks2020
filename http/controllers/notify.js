require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports.scamMessage = (phoneNumber, message) => {
    client.messages
        .create({body: message, from: '+17787714278', to: phoneNumber})
        .then(message => console.log(message.sid)).catch(err => console.log(err)).done()
}
module.exports.slamTheScam = (callSid) => {
    client.calls(callSid)
      .update({status: 'completed'})
      .then(call => console.log(call.to));
};

// scamMessage('+16043680585', 'HI')