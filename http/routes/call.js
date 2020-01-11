var express = require('express');
var twilio = require('twilio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'incoming request'})
});

router.post('/incoming/', function(req, res, next) {
  const response = new twilio.twiml.VoiceResponse();
  response.say("Connecting you to Trevor ");
  response.dial('+17783182935', {
    action: '/goodbye/'
  });
  res.set('Content-Type', 'text/xml');

  return res.send(response.toString());
});

router.post('/goodbye/', (req, res) => {
  const response = new twilio.twiml.VoiceResponse();
  response.say("Thank you for using Call Congress! " +
               "Your voice makes a difference. Goodbye.");
  response.hangup();
  res.set('Content-Type', 'text/xml');
  res.send(response.toString());
});

module.exports = router;
