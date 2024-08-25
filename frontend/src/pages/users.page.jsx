import { useEffect, useState } from "react";
import Layout from "../components/layout.component";
import UsersView from "../views/users.view";
import DataTable from "datatables.net-dt";
import UserService from "../services/user.service";

const Users = () => {
    const [users, setUsers] = useState([]);
	useEffect(() => {
		new DataTable("#datatablesSimple");

        UserService.getUsers()
        .then(data => setUsers(data))
	}, []);
	return (
		<>
			<Layout>
				<UsersView users={users}/>
			</Layout>
		</>
	);
};

export default Users;
