import postService from '../services/post.service.js'; // Importa el servicio de posts

// Función para inicializar el WebSocket
export const initSocket = (io) => {
  io.on('connection', async (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Manejar evento para obtener posts al conectar
    socket.on('getPosts', async () => {
      try {
        const posts = await postService.getPosts(); // Utiliza el servicio para obtener los posts
        socket.emit('posts', posts); // Emitir posts al cliente que se conectó
      } catch (error) {
        console.error('Error fetching posts:', error);
        socket.emit('error', { message: 'Error fetching posts' });
      }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
