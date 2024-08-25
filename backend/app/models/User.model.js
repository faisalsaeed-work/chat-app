const {mongoose} = require("./../config/db.config");
const UserSchema = require("./../schemas/User.schema");

const User = mongoose.model("User", UserSchema);

module.exports = User;
