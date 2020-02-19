import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "./modal";

export const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<h1 className="display-4">Eduardo Puermas</h1>
			<p className="lead">
				Dedicated web developer constantly learning and using
				<br />
				the latest front-end and back-end technologies.
				<br />
				<br />
				Excited about opportunities where experience can best be
				<br />
				leveraged towards working on projects in a team environment.
			</p>
			<br />
			<button className="btn btn-primary btn-lg" data-toggle="modal" data-target={Modal}>
				Learn more
			</button>
			<br />
		</div>
	);
};
