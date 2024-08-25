const {mongoose} = require("../config/db.config");

const messageSchema = new mongoose.Schema({
	chatId: {type: 'ObjectId', required: true},
	senderId: {type: 'ObjectId', required: true},
	messageText: {type: String, required: true},
	isRead: {type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = messageSchema
