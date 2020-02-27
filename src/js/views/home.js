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
							<p className="about-card--text card-text">
								{
									"I have always been interested in the world of computing, it’s always seem interesting to me that just how us humans communicate using different languages, so do computers.  And if we understand this language that computers “speak” the possibilities are endless.  "
								}
							</p>
						</div>
					</div>
					{/* <div className="home-gif">
						<img
							src="https://cdn.lowgif.com/full/fe19eb80eda2e497-home-investellar-corp-the-luxury-property-developer.gif"
							id="cogwheel-gif"
						/>
					</div> */}
					{/* Card2 */}
					<div className="why-card card">
						<div className="why-card-body card-body">
							<h5 className="why-card-title card-title">How I Began Coding</h5>
							<p className="why-card--text card-text">
								{
									"I knew learning to code would be hard on my own, I didn’t know the right path to take nor did I have the guidance of experienced instructors like I did at  4Geeks.  I chose 4Geeks mainly because of the syllabus, it seemed like the complete package to get a working amount of knowledge in the field, and I am happy to say that I made the right decision.  "
								}
							</p>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
};
