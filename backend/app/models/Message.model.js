const {mongoose} = require("../config/db.config");
const MessageSchema = require("../schemas/Message.schema");

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
