import http from 'http';
import app from './app.js';
import { Server } from 'socket.io';
import { initSocket } from './sockets/socketHandler.js';
import { options } from './config/options.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Inicializar WebSocket
initSocket(io);

const PORT = options.server.port;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
