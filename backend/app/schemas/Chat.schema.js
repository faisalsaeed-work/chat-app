const {mongoose} = require("../config/db.config");

const chatSchema = new mongoose.Schema({
	type: String,
	participants: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
	chat_name: { type:String, required: false},
	admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
	is_group: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = chatSchema
