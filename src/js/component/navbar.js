import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to={"/"} className="nav-logo" href="#">
				<img src="https://i.imgur.com/KK3xtxv.png" width="100%" alt="" className="" />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to={"/"} className="nav-home" href="#" id="navFind">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"skills"} className="nav-skills" href="#" id="navFind">
							Skills
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"projects"} className="nav-projects" href="#" id="navFind">
							Projects
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
