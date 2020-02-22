import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";

export const Jumbotron = () => {
	const [lgShow, setLgShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
			<Button variant="btn btn-primary btn-lg" onClick={handleShow}>
				View Resume
			</Button>

			<Modal show={show} size="lg" onHide={handleClose} dialogClassName="modal-150w" className="modal">
				<Modal.Header closeButton>
					<Modal.Title>
						<p className="modal-title">Resume</p>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<img className="resume" src="https://i.imgur.com/5bStlUY.jpg" />
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" id="modal-button" onClick={handleClose}>
						<p>Close</p>
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
