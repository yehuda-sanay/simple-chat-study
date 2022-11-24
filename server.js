const fs = require('fs')

const server = require('http').createServer((req, res)=>{
    fs.readFile('./index.html',(err, result)=>{res.end(result)})
})
const io = require('socket.io')(server)
io.on('connection',(socket)=>{
    socket.on('message',(textMsg)=>{
        console.log('emit');
        io.emit('message',textMsg)
    })
})

server.listen(6060)

// const server = require('http')

// const fs = require('fs');

// const io = require('socket.io')(server);



// const app= server.createServer((req, res) => {
//     fs.readFile('./index.html',(err, result)=>
//     res.send(result)
//     )
// })

// io.on('connection',(socket)=>{
//     socket.on('message',(textMsg)=>{
//         console.log('emit');
//         io.emit('message',textMsg)
//     })
// })

// app.listen(5050)