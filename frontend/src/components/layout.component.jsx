import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CHAT_ROOM_PATH, HOME_PATH, LOCAL_STORAGE_AUTH_USER, LOGIN_PATH, USERS_PATH } from "../utils/constants";
import AuthService from "../services/auth.service";

const Layout = ({ children }) => {
	const authUser = AuthService.getLoggedInUser();
	if(!authUser) window.location.href = LOGIN_PATH;
    const logout = () => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH_USER);
        window.location.href = LOGIN_PATH;
    }
	return (
		<>
			<div className="sb-nav-fixed">
				<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
					<Link className="navbar-brand ps-3" to={HOME_PATH}>
						Chat App
					</Link>
					<button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
						<i className="fas fa-bars" />
					</button>
				</nav>
				<div id="layoutSidenav">
					<div id="layoutSidenav_nav">
						<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
							<div className="sb-sidenav-menu">
								<div className="nav">
									<Link className="nav-link" to={USERS_PATH}>
										<div className="sb-nav-link-icon">
											<i className="fas fa-tachometer-alt"></i>
										</div>
										Users
									</Link>
									<Link className="nav-link collapsed" to={CHAT_ROOM_PATH} >
										<div className="sb-nav-link-icon">
											<i className="fas fa-columns"></i>
										</div>
										Chat Rooms
									</Link>
                                    <div className="nav-link collapsed" onClick={logout} >
										<div className="sb-nav-link-icon">
											<i className="fas fa-power-off"></i>
										</div>
										Logout
									</div>
								</div>
							</div>
							<div className="sb-sidenav-footer">
								<div className="small">Logged in as:</div>
								{authUser.name}
							</div>
						</nav>
					</div>
					<div id="layoutSidenav_content">
						<main>{children}</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
