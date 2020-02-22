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
				{/* DiscoverLaw */}
				<div className="discover-law card" style={{ width: "18rem" }}>
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
				{/* Contact List */}
				<div className="contact-list card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/8t8YWT3.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Interactive Contact List</h5>
						<p className="card-text">
							Code that prints an interactive contact list allowing the user to add, edit, and delete
							contacts using an API.
						</p>
						<a
							href="https://github.com/epuermas/Functional-ContactList"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer">
							Go to repository
						</a>
					</div>
				</div>
				{/* To-do List */}
				<div className="todo-list card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/2XLG6v5.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Interactive To-Do List</h5>
						<p className="card-text">
							Code that prints an interactive to-do list allowing the user to add and delete tasks.
							<br />
							<br />
						</p>
						<a
							href="https://github.com/epuermas/To-do-List"
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
