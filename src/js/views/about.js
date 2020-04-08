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
				<p>{" Insert header description"}</p>
			</div>
			<br />
			<div className="about-me-info">
				<div className="face-photo-first">
					<img src="" />
				</div>
				<div className="about-me-card-first card d-flex justify-content-center">
					<div className="about-me-card-body card-body">
						<p className="about-card--text card-text">{"Insert about me description"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
