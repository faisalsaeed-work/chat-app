import React, { useState } from "react";
import LoginView from "../views/login.view";
import AuthService from "../services/auth.service";

const Login = () => {
	const [credentials, setCredentials] = useState({email: "", password: ""});

	const handleSubmit = (e) => {
		e.preventDefault();
		AuthService.login(credentials)
	};

    const handleChange = ({target}) => {
        const {name, value} = target;
        setCredentials((prevState) => ({...prevState, [name]: value}));
    }

	return (
		<LoginView handleChange={handleChange} handleSubmit={handleSubmit} credentials={credentials}/>
	);
};

export default Login;
