const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/chat-app', { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    connect, mongoose
}