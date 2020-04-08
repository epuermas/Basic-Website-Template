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
			<p className="skills-text d-flex justify-content-center">Insert header description</p>
			<br />
			<div className="projects-cards d-flex justify-content-center">
				{/* DiscoverLaw */}
				<div className="discover-law card" style={{ width: "18rem" }}>
					<img src="" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Insert Project Title</h5>
						<p className="card-text">Insert project description</p>
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
				{/* Traffic light List */}
				<div className="traffic-light card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/Ae8dXuT.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Interactive Traffic Light</h5>
						<p className="card-text">
							Code that prints an interactive traffic light, onlick user can turn on lights.
							<br />
							<br />
						</p>
						<a
							href="https://github.com/epuermas/Interactive-Traffic-Light"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer">
							Go to repository
						</a>
					</div>
				</div>
			</div>
			<div className="projects-cards-bottom d-flex justify-content-center">
				{/* Seconds Counter List */}
				<div className="seconds-counter card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/5IMkspM.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Seconds Counter</h5>
						<p className="card-text">
							Code that triggers a seconds counter as soon as the page refreshes.
							<br />
							<br />
						</p>
						<a
							href="https://github.com/epuermas/Seconds-Counter"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer">
							Go to repository
						</a>
					</div>
				</div>
				{/* Random Card Generator */}
				<div className="random-card card" style={{ width: "18rem" }}>
					<img src="https://i.imgur.com/EpYhJnq.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Random Card Generator</h5>
						<p className="card-text">
							Code that prints a random card any time the uses refreshes the page.
							<br />
							<br />
						</p>
						<a
							href="https://github.com/epuermas/Random-Card-Generator"
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
