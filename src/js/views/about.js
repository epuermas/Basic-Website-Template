import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="about-content">
			<div className="about-header d-flex justify-content-center">
				<h1>About</h1>
			</div>
			<div className="about-text d-flex justify-content-center">
				<p>
					{
						" '' Biographies on websites don't tell you what you want to know, they tell you what people want you to know. '' "
					}
				</p>
			</div>
			<br />
			<div className="about-me-info">
				<div className="face-photo">
					<img src="https://pbs.twimg.com/profile_images/943488527404281857/v9q4Vdqp_400x400.jpg" />
				</div>
				<div className="about-me-card card">
					<div className="about-me-card-body card-body">
						<p className="about-card--text card-text">
							{
								"I have always been interested in the world of computing, it’s always seem interesting to me that just how us humans communicate using different languages, so do computers.  And if we understand this language that computers “speak” the possibilities are endless.  "
							}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
