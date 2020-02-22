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
				<div className="footer-home">
					<Footer />
				</div>
			</div>
		</div>
	);
};
