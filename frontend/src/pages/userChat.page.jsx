import { useEffect, useState } from "react";
import Layout from "../components/layout.component";
import ChatService from "../services/chat.service";
import ChatView from "../views/chat.view";
import { useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";
import IO from "socket.io-client";

const UserChat = () => {
	const authUser = AuthService.getLoggedInUser();
	const { userData } = useLocation().state;
	const [chat, setChat] = useState(null);
	const [message, setMessage] = useState("");

	/**
	 * Not working for some reason but here is the code for websocket
	 */
	// useEffect(() => {
	// 	const socket = IO.connect(process.env.REACT_APP_WEBSOCKET_PATH);
	// 	socket.on(`chat-message-${authUser?._id}-${userData?._id}`, (data) => {
	// 		setChat(data.chat);
	// 	});
	// 	return () => socket.disconnect();
	// }, [chat, userData]);

	useEffect(() => {
		const retrieveChat = () => {
			const userId = userData._id;
			ChatService.getUsersMessages({ userId }).then((res) => res && setChat(res));
		};
		if (userData?._id) retrieveChat();
	}, [userData]);

	const sendMessage = () => {
		const data = {
			receiverId: userData?._id,
			messageText: message,
			chatId: chat?._id ?? null,
		};
		ChatService.sendMessage(data).then((res) => {
			setChat(res);
			setMessage("");
		});
	};

	const handleMessageChange = ({ target }) => {
		setMessage(target.value);
	};
	return (
		<>
			<Layout>
				<ChatView authUser={authUser} userData={userData} chat={chat} message={message} handleMessageChange={handleMessageChange} sendMessage={sendMessage} />
			</Layout>
		</>
	);
};

export default UserChat;
