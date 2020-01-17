const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports.scamMessage = (toNumber, fromNumber, message) => {
    client.messages
        .create({body: message, from: fromNumber, to: toNumber})
        .then(message => console.log(message.sid)).catch(err => console.log(err)).done()
}
module.exports.slamTheScam = (callSid) => {
    client.calls(callSid)
      .update({twiml: '<Response><Say voice="Polly.Russell">scam slam has detected a potential scam and hung up the call</Say></Response>'})
      .then(call => console.log(call.to))
      .catch(err => console.log(err));
};
