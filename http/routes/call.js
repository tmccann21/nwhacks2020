var express = require('express');
var twilio = require('twilio');
var router = express.Router();

const forward_response = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say>Connecting you to Trevor</Say>
    <Dial action="/goodbye/">+17783182935</Dial>
    <Start>
   		<Stream url="wss://c4973224.ngrok.io" />
	</Start>
</Response>
`

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'incoming request'})
});

router.post('/incoming/', function(req, res, next) {
  res.set('Content-Type', 'text/xml');

  return res.send(forward_response);
});

router.post('/goodbye/', (req, res) => {
  const response = new twilio.twiml.VoiceResponse();
  response.say("Thank you for using Call Trevor! " +
               "Your voice makes a difference. Goodbye.");
  response.hangup();
  res.set('Content-Type', 'text/xml');
  res.send(response.toString());
});

module.exports = router;
