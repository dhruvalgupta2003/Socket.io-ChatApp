const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

app.use(express.json())
app.use(cors());

const server = http.createServer(app);


app.post('/authenticate', async (req,res) =>{
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..."});
});


const io = new Server(server, {
    cors: {
        origin:"https://stellar-starlight-e86ff2.netlify.app" , //"http://localhost:3000"(for development environment)
        methods: ['GET', 'POST'],
    },
})

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    
    socket.on('disconnect', () =>{
        console.log("User Disconnected",socket.id);
    })
    
    socket.on('join_room', (data) =>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`)

    })
    
    socket.on('send_message' ,(data) =>{
        socket.to(data.room).emit("receive_message", data);
        // console.log(data);
    })
})


const port = 5000
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
