import { io } from 'socket.io-client';

const SOCKET_URL = "https://farasanya.feres.co/";

const socket = io(SOCKET_URL, {
  autoConnect: false, // Connect manually when needed
  transports: ["websocket"],
});

export default socket;