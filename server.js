//const button = document.querySelector('button');

const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection", ws => {
    console.log("Connected to client.");

    ws.on("message", data =>{
        console.log(`client: ${data}`);

        ws.send(data);
    });

    ws.on("close", () =>{
        console.log("client has disconnected");
    });
});
