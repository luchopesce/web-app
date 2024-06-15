import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_SERVER_URL); 
//console.log(process.env.REACT_APP_API_URL)
export default socket;