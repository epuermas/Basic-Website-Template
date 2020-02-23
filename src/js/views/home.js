import React from "react";
import "../../styles/home.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Jumbotron } from "../component/jumbotron";
import { Footer } from "../component/footer";

export const Home = () => {
	return (
		<div className="home-content">
			<div className="d-flex flex-column h-100">
				<div className="jumbotron-home">
					<Jumbotron />
				</div>
			</div>
			<div className="home-about d-flex flex-row bd-highlight mb-2">
				<span className="badge badge-pill badge-primary">Why I began coding</span>
				<div className="home-about-box1">
					<p className="home-about-text">
						{
							"I have always been interested in the world of computing, it’s always seem interesting to me that just how us humans communicate using different languages, so do computers.  And if we understand this language that computers “speak” the possibilities are endless."
						}
					</p>
				</div>
			</div>
		</div>
	);
};
