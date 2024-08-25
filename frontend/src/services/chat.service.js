import httpClient from "./http-client.service";

export default {
	sendMessage: (data) => {
        return httpClient.post('/send-message', data)
        .then(res => res.data)
    },

    getUsersMessages: (data) => {
        return httpClient.post('/get-chat-by-users', data)
        .then(res => res.data)
    }
    
};
