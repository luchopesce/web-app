import http from 'http';
import app from './app.js';
import { Server } from 'socket.io';
import { initSocket } from './sockets/socketHandler.js';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Inicializar WebSocket
initSocket(io);

const PORT = 3030;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
