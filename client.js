const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open", () => {
    console.log("Connected to server.");

    ws.send("test message");
});

ws.addEventListener("message", ({ data }) => {
    console.log(data);
});