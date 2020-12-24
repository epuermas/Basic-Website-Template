import React from "react";
import "../../styles/home.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { Jumbotron } from "../component/jumbotron";
import { Footer } from "../component/footer";

export const Home = () => {
	return (
		<div className="home-content">
			<div className="d-flex flex-column h-100">
				<div className="jumbotron-home">
					<Jumbotron />
				</div>

				<div className="below-jumbotron d-flex justify-content-center">
					{/* Card1 */}
					<div className="about-card card">
						<div className="about-card-body card-body">
							<h5 className="about-card-title card-title">Why I Began Coding</h5>
							<p className="about-card--text card-text">{"Insert your information here"}</p>
						</div>
					</div>
					<div className="why-card card">
						<div className="why-card-body card-body">
							<h5 className="why-card-title card-title">How I Began Coding</h5>
							<p className="why-card--text card-text">{"Insert your information here"}</p>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
};
