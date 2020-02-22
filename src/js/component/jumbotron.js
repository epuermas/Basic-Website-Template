import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";

export const Jumbotron = () => {
	// const { store, actions } = useContext(Context);
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
			{/* <button className="btn btn-primary btn-lg" data-toggle={Modal} data-target={Modal}>
				Open Resume
			</button> */}
			<Button variant="btn btn-primary btn-lg" onClick={handleShow}>
				Launch demo modal
			</Button>
			<br />

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<p>Modal heading</p>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Woohoo, youre reading this text in a modal!</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						<p>Close</p>
					</Button>
					<Button variant="primary" onClick={handleClose}>
						<p>Save Changes</p>
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
