import { HOME_PATH, LOCAL_STORAGE_AUTH_USER, LOGIN_PATH } from "../utils/constants";
import httpClient from "./http-client.service";

export default {
	login: (data) => {
		return httpClient.post('/login', data)
        .then((res) => {
            localStorage.setItem(LOCAL_STORAGE_AUTH_USER, JSON.stringify(res.data));
            window.location.replace(HOME_PATH);
        })
        .catch((err) => {
            alert(err.data.error);
            console.error(err)
        });
	},

    signup: (data) => {
		return httpClient.post('/signup', data)
        .then((res) => {
            alert(res.data.message)
            window.location.replace(LOGIN_PATH);
        })
        .catch((err) => {
            alert(err.data.error);
            console.error(err)
        });
	},

    getLoggedInUser: () => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_USER));
    }
};
