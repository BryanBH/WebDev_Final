import React from "react";
import { Nav, NavLink, NavMenu, Image } from "./NavbarElement";
import logo from "../../images/logo.png";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Image>
					<NavLink to="/">
						<img src={logo} alt="img" />
					</NavLink>
				</Image>
				<NavMenu>
					<NavLink to="news" activestyle="true">
						News
					</NavLink>
					<NavLink to="about" activestyle="true">
						About
					</NavLink>
				</NavMenu>
				<NavLink to="/">
					<h1>
						<i>Apex Tracker</i>
					</h1>
				</NavLink>
			</Nav>
		</>
	);
};

export default Navbar;
