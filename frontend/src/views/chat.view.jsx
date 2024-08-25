import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ChatView = ({ authUser, userData, chat, message, handleMessageChange, sendMessage }) => {
	useEffect(() => {
		require("../assets/css/chat.css");
	}, [])
	return (
		<>
			<div className="chat-container">
				{/* Chat Header */}
				<div className="chat-header">Chat with {userData?.name}</div>
				{/* Chat Body */}
				<div className="chat-body d-flex flex-column">
					{
						chat?.messages?.map((message) => {
							return message?.senderId == authUser?._id ?
							<div key={message?._id} className="message sender">{message?.messageText}</div>
							:
							<div key={message?._id} className="message receiver">{message?.messageText}</div>
						})
					}
					
				</div>
				{/* Chat Footer */}
				<div className="chat-footer fixed-bottom-input">
					<div className="input-group">
						<input type="text" value={message} onChange={handleMessageChange} className="form-control" placeholder="Type a message..." />
						<div className="input-group-append">
							<button className="btn btn-primary" type="button" onClick={sendMessage}>
								Send
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatView;