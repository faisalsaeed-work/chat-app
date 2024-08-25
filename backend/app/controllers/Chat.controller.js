const UserModel = require("../models/User.model");
const BadRequestResource = require("../resources/BadRequest.resource");
const SuccessResource = require("../resources/Success.resource");
const ChatModel = require("../models/Chat.model");
const MessageModel = require("../models/Message.model");
const ChatResource = require("../resources/Chat.resource");
const WebSocketService = require("../services/Socket.service");

const sendMessage = async (req, res) => {
	try {
		const { receiverId, messageText, chatId } = req.body;
		let chatObject = null;
		if(chatId){
			chatObject = await ChatModel.findById(chatId);
		} else {
			chatObject = new ChatModel({
				type: "private",
				participants: [req.user._id, receiverId],
			});
			await chatObject.save()
		}
		let messageObject = new MessageModel({
			chatId: chatObject._id,
			senderId: req.user._id,
			messageText
		});
		await messageObject.save()
		const getMessages = await MessageModel.find({chatId: chatObject._id})
		const resource = ChatResource(chatObject, getMessages);
		// WebSocketService.notifyChatMessage(req.user._id, receiverId, resource)
		res.json(resource);
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

const getChatByUsers = async (req, res) => {
	try {
		const { userId } = req.body;
		let userIds = [req.user._id.toString(), userId];
		userIds = userIds.filter((item, index) => userIds.indexOf(item) === index); // array uniqueu
		const chat = await ChatModel.findOne({
			participants: {
				$all: userIds,
				$size: userIds.length
			},
			type: 'private', 
			is_group: false 
		  });

		if(!chat){
			res.json(null)
			return;
		}
		const getMessages = await MessageModel.find({chatId: chat._id})

		res.json(ChatResource(chat, getMessages));
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

module.exports = {
	sendMessage, getChatByUsers
};
