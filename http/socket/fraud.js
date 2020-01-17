const NLC = require('watson-developer-cloud/natural-language-classifier/v1');

const nlcId = process.env.IBM_NLC_ID;
const apiKey = process.env.IBM_IAM_KEY;

const classifier = new NLC({iam_apikey: apiKey});


const test = async (text) => {
  return new Promise((res, rej) => {
    classifier.classify({
      text: text,
      classifier_id: nlcId,
    }, function(err, response){
      if (err) {
        return rej(err);
      } else {
        return res({
          spam: response.classes[2].confidence,
          safe: response.classes[0].confidence,
        })
      }
    })
  });
}

module.exports = {
  test: test,
}