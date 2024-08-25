const notifyChatMessage = (senderId, receiverId, Chat) => {
    WSSGlobal.emit(`chat-message-${receiverId}-${senderId}`, {Chat});
}

module.exports = {
    notifyChatMessage
}