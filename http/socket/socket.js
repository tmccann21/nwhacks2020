//Include Google Speech to Text
const speech = require("@google-cloud/speech");
const client = new speech.SpeechClient();

const fraud = require('./fraud')
const notify = require('../controllers/notify')

//Configure Transcription Request
const request = {
  config: {
    encoding: "MULAW",
    sampleRateHertz: 8000,
    languageCode: "en-GB"
  },
  interimResults: false,
};

const socket = (ws, url) => {
  let recognizeStream = null;
  let callSid = '';
  let fullCallerTranscript = '';

  ws.on("message", function incoming(message) {
    const msg = JSON.parse(message);
    switch (msg.event) {
      case "connected":
        console.log(`A new call has connected`);

        // Create Stream to the Google Speech to Text API
        recognizeStream = client
          .streamingRecognize(request)
          .on("error", console.error)
          .on("data", data => {
            fullCallerTranscript += data.results[0].alternatives[0].transcript;
            if (fullCallerTranscript.includes('credit')) {
              notify.slamTheScam(callSid);
            }
            fraud.test(fullCallerTranscript).then((scores) => {
              if(scores.scam > 0.8)
                notif.slamTheScam(callSid);
            }).catch(err => console.log(err))
          });

        break;
      case "start":
        callSid = msg.start.callSid;
        console.log(`a new media stream for call ${callSid} has been created`);
        break;
      case "media":
        // Write Media Packets to the recognize stream
        recognizeStream.write(msg.media.payload);
        break;
      case "stop":
        console.log(`Call Has Ended`);
        recognizeStream.destroy();
        break;
    }
  });
}

module.exports = {
  socket: socket,
}
