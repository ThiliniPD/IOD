const express = require('express');
const app = express();
const http = require('http');

const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
 const userName = socket.handshake.headers.name;
 console.log(`User ${userName} connected`);

 socket.broadcast.emit('connection', { name: userName });
 socket.emit("system message", { name: 'system', message:`welcome ${userName}` });

 socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', { name: userName, message:msg });
  });

  socket.on('disconnect', (reason) => {
    socket.broadcast.emit('disconnection', { name: userName } )
  });
});

const port = 3001
server.listen(port, () => {
 console.log(`listening on *:${port}`);
});
