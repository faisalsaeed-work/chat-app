const {mongoose} = require("../config/db.config");
const ChatSchema = require("../schemas/Chat.schema");

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
