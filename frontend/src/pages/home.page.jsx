import Layout from "../components/layout.component";
import AuthService from "../services/auth.service";
import HomeView from "../views/home.view";

const Home = () => {
	const authUser = AuthService.getLoggedInUser();
	return (
		<>
			<Layout ><HomeView authUser={authUser}/></Layout>
		</>
	);
};

export default Home;
