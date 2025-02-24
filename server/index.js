const http = require('http');
const { Server } = require('socket.io');

// Create the HTTP server
const server = http.createServer();

// Configure the Socket.IO server with CORS
const io = new Server(server, {
  cors: {
    origin: '*',  // Allow all origins for now. You can restrict this by setting a specific origin like 'http://localhost:3001'
    methods: ['GET', 'POST'],  // Allow specific HTTP methods
  }
});

const emailToSocketIdMap = new Map();
const socketIdToemailMap = new Map();

// Listen for socket connection events
io.on('connection', (socket) => {
  console.log('Radhe Radhe: socket connected', socket.id);

  socket.on('room:join', (data) => {
    console.log(data);
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketIdToemailMap.set(socket.id, email);
    io.to(room).emit('user:joined', {email, id: socket.id})
    socket.join(room);
    io.to(socket.id).emit('room:join', data)
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit('incoming:call', { from: socket.id, offer})
  })

  socket.on("call:accepted", ({ to, answer }) => {
    io.to(to).emit('call:accepted', { from: socket.id, answer
    })
  })
  
  socket.on('peer:nego:needed', ({to, offer}) => {
    console.log('peer:nego:needed', offer);
    io.to(to).emit('peer:nego:needed', { from: socket.id, offer})
  })
  
  socket.on('peer:nego:done', ({to, answer}) => {
    console.log('peer:nego:done', answer);
    io.to(to).emit('peer:nego:final', { from: socket.id, answer})
  })
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    const email = socketIdToemailMap.get(socket.id);
    if (email) {
      emailToSocketIdMap.delete(email);
    }
    socketIdToemailMap.delete(socket.id);
  });
});


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
