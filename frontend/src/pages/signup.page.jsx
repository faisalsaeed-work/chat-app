import React, { useState } from "react";
import SignupView from "../views/signup.view";
import AuthService from "../services/auth.service";

const Signup = () => {
	const [userData, setUserData] = useState({name: "", email: "", password: ""});

	const handleSubmit = (e) => {
		e.preventDefault();
		// You would send the login data to your backend here
		AuthService.signup(userData)	
	};

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUserData((prevState) => ({...prevState, [name]: value}));
    }

	return (
		<SignupView handleChange={handleChange} handleSubmit={handleSubmit} userData={userData}/>
	);
};

export default Signup;
