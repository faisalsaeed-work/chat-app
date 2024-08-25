import { Link } from "react-router-dom";

const SignupView = ({ handleSubmit, handleChange, userData }) => {
	return (
		<div className="row justify-content-center align-middle vh-100">
			<div className="col-4 align-self-center">
				<div className="card">
					<div className="card-body g-5">
						<h2>Signup</h2>
						<form onSubmit={handleSubmit}>
							<div className="form-group my-2">
								<label htmlFor="exampleInputEmail1">Name</label>
								<input value={userData.name} onChange={handleChange} type="text" className="form-control" name="name" placeholder="Enter name" />
							</div>
							<div className="form-group my-2">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input value={userData.email} onChange={handleChange} type="email" className="form-control" name="email" placeholder="Enter email" />
							</div>
							<div className="form-group my-2">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input value={userData.password} type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password" />
							</div>

							<button type="submit" className="btn btn-primary mt-3">
								Sign Up
							</button>
						</form>

						<p>
							Have an account? <Link to="/login">Login here</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupView;
