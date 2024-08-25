import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UsersView = ({ users }) => {
	return (
		<>
			<div className="card mb-4">
				<div className="card-header">
					<i className="fas fa-person me-1"></i>
					Users
				</div>
				<div className="card-body">
					<table id="" className="table">
						<thead className="thead-dark">
							<tr>
								<th>Name</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={index}>
									<td>{user.name}</td>
									<td>
										<Link to={`/chat/${user._id}`} state={{userData: user}} className="btn btn-primary">Chat</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default UsersView;
