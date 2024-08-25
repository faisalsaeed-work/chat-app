const MessageResource = require("./Message.resource");

const ChatResource = (chat, messages = []) => {
	return {
		_id: chat._id,
		type: chat.type,
		participants: chat.participants,
		chatName: chat.chat_name,
		admin: chat.admin,
		is_group: chat.is_group,
		createdAt: chat.created_at,
		updatedAt: chat.updated_at,
        messages: messages.map((m) => MessageResource(m))
	};
};

module.exports = ChatResource;
