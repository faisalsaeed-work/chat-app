import { Link } from "react-router-dom";

const LoginView = ({handleSubmit, handleChange, credentials}) => {
	return (
		<div className="row justify-content-center align-middle vh-100">
			<div className="col-4 align-self-center">
				<div className="card">
					<div className="card-body g-5">
						<h2>Login</h2>
						<form onSubmit={handleSubmit}>
							<div className="form-group my-2">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input value={credentials.email} onChange={handleChange} type="email" className="form-control" name="email" placeholder="Enter email" />
							</div>
							<div className="form-group my-2">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input value={credentials.password} type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password" />
							</div>

							<button type="submit" className="btn btn-primary mt-3">
								Sign In
							</button>
						</form>

						<p>
							Don't have an account? <Link to="/signup">Signup here</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginView;