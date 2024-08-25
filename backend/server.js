const express = require('express');
const {connect} = require('./app/config/db.config');
const WebSocket = require('ws');
const app = express();
const apiRoutes = require('./app/routes');
const cors = require('cors');
require('dotenv').config()
// MongoDB connection
connect()

app.use(cors())
// Middleware
app.use(express.json());

/** Init routes */
app.use('/api',apiRoutes)

app.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
      message: error.message
  });
});

// WebSocket server for real-time messaging
const server = app.listen(3001, () => console.log('Server is running on port 3001'));
const wss = new WebSocket.Server({ port: 3002 });
wss.on('connection', (ws) => {
  console.log("New client connected");
  (() => {
    global.WSSGlobal = wss
  })()
  // ws.on('message', async (message) => {
  //   const { from, to, content } = JSON.parse(message);
  //   const newMessage = new Message({ from, to, content });
  //   await newMessage.save();
    
  //   // Send message to recipient in real-time
  //   wss.clients.forEach(client => {
  //     if (client !== ws && client.readyState === WebSocket.OPEN) {
  //       client.send(JSON.stringify({ from, to, content }));
  //     }
  //   });
  // });
});

// Start server
