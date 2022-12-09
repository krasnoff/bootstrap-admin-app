import { io } from 'socket.io-client';

let socket: any;

export const initiateSocketConnection = () => {
	// eslint-disable-next-line
    socket = io(process.env.REACT_APP_SOCKET_ENDPOINT as string + ':3001');
	console.log(`Connecting socket...`, process.env.REACT_APP_SOCKET_ENDPOINT + ':3001');
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
}

export const subscribeToChat = (cb: any) => {
	socket.on('random-sentence', (msg: any) => {
    	return cb(null, msg);
  	});
}