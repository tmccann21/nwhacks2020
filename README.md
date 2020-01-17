
<p align="center">
  <img width="300" height="120" src="https://drive.google.com/uc?export=view&id=1pXQlqD8-T1IuCoMwZ9Eu1fYpS_IRiKr0">
</p>
<h2 align="center" style="font-size:60px; font-weight:bold; margin-bottom:0px"> Scam Slam </h2>
<h3 align="center"> NWHacks 2020  </h3>

## About
Scam Slam is a product which protects users by analyzing call audio in real-time to detect and interrupt fraudulent phone scams. This project was originally created in 24 Hours for the NWHacks 2020 Hackathon.

## How it Works
Scam Slam accepts calls through a Twilio programmatic voice number. The call is forwarded to your real phone number, and the call audio is streamed to our server. First Google Speach to Text API is called to transcribe the audio in real time. Next, the transcribed audio is fed to a neural network to detect and predict whether a scam is occuring. If a scam is detected, we hang up the call to protect users.

For a front-end Scam Slam uses a react-native application to interact with the service. Users can sign up and receive their scam slam public number which will forward calls to the device number.