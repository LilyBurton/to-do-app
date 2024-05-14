const express = require('express')
const app = express()
const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const http = require('http').Server(app);
const cors = require('cors')

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

socketIO.on('connection', (socket) => {
    console.log(`${socketIO} user is connected!`);
    socket.on('disconnect', () => {
        socket.disconnect()
        console.log('What?? User disconnected!')
    });
});

app.get("/api", (res, req) => {
    res.json({
        message: "Hello World",
    });
});

http.listen((PORT, () => {
    console.log(`Server listening on ${PORT}`)
}))