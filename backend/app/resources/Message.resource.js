const MessageResource = (message) => {
	return {
		_id: message._id,
		chatId: message.chatId,
		senderId: message.senderId,
		messageText: message.messageText,
		isRead: message.isRead,
		createdAt: message.created_at,
		updatedAt: message.updated_at,
	};
};

module.exports = MessageResource;
