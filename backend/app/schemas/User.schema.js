const {mongoose} = require("./../config/db.config");

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = userSchema
