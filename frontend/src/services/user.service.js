import httpClient from "./http-client.service";

export default {
	getUsers: () => {
		return httpClient.get('/get-users')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert('something went wrong');
            console.error(err)
        });
	},
    
};
