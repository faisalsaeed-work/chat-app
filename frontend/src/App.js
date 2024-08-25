import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/login.page";
import Signup from "./pages/signup.page";
import Home from "./pages/home.page";
import Users from "./pages/users.page";
import UserChat from "./pages/userChat.page";
import { HOME_PATH, LOGIN_PATH, SIGNUP_PATH, USERS_PATH, USER_CHAT_PATH } from "./utils/constants";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={LOGIN_PATH} element={<Login />} />
					<Route path={SIGNUP_PATH} element={<Signup />} />
					<Route path={USERS_PATH} element={<Users />} />
					<Route path={USER_CHAT_PATH} element={<UserChat />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
