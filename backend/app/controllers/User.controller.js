const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("./../models/User.model");
const UserResource = require("../resources/User.resource");
const BadRequestResource = require("../resources/BadRequest.resource");
const SuccessResource = require("../resources/Success.resource");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) return res.status(400).json(BadRequestResource("Invalid credentials"));

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) return res.status(400).json(BadRequestResource("Invalid credentials"));

		const token = jwt.sign({ userId: user._id }, process.env.APP_KEY, { expiresIn: "2h" });
		res.json(UserResource({ ...user._doc, token }));
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

const signup = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new UserModel({ name, email, password: hashedPassword });
		await user.save();
		res.json(SuccessResource("Successfully signed up"));
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

module.exports = {
	login,
	signup,
	getUsers,
};
