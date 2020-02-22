import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Projects = props => {
	return (
		<div className="projects-content">
			<div className="skills-header d-flex justify-content-center">
				<h1>Projects</h1>
			</div>
			<p className="skills-text d-flex justify-content-center">
				These are the projects I have worked on and completed, the list is growing and constantly being updated.
			</p>
			<br />
			<div className="projects-cards d-flex justify-content-center">
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/5A6LNz5.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">DiscoverLaw</h5>
						<p className="card-text">
							Website that allows users to directly ask attorneys legal questions and locate Law Firms
							based on legal needs.
						</p>
						<a
							href="https://github.com/epuermas/Final-Project"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer">
							Go to repository
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
