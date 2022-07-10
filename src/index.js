
import app from './app.js'
import http from 'http'
import { Server } from 'socket.io'
import sockets from './sockets.js'

const httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on PORT: ' + `${process.env.PORT ? process.env.PORT : 3000}`);
});

const io = new Server(httpServer);
sockets(io)
