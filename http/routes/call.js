var express = require('express');
var twilio = require('twilio');
var router = express.Router();

const toNumber = process.env.TO_NUMBER;
const socketURL = process.env.SOCKET_URL;

const callForwardResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Russell">the person you're trying to reach is using scam slam scam prevention. Your call is now being forwarded</Say>
  <Start>
    <Stream url="${socketURL}" />
  </Start>
  <Dial>${toNumber}</Dial>
</Response>
`

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'incoming request'})
});

router.post('/incoming/', function(req, res, next) {
  const callSid = req.body.CallSid;
  res.set('Content-Type', 'text/xml');

  const customResponse = callForwardResponse.replace('{callSid}', callSid)
  return res.send(customResponse);
});

module.exports = router;
