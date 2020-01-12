const socket = (ws) => {
  console.log('a socket has connected');
  ws.on("message", function incoming(message) {
    const msg = JSON.parse(message);
    switch (msg.event) {
      case "connected":
        console.log(`A new call has connected.`);
        break;
      case "start":
        console.log(`Starting Media Stream ${msg.streamSid}`);
        break;
      case "media":
        console.log(`Receiving Audio...`)
        break;
      case "stop":
        console.log(`Call Has Ended`);
        break;
    }
  });
}

module.exports = {
  socket: socket,
}