import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p className="footer-text">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://www.instagram.com/eddy_prms/" target="_blank" rel="noopener noreferrer">
				Eduardo Puermas
			</a>
		</p>
		<div className="footer-icons align-self-center">
			<a
				className="fab fa-linkedin"
				a
				href="https://www.linkedin.com/in/eduardopuermas8698/"
				id="linkedin-footer"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className="fab fa-github-square"
				a
				href="https://github.com/epuermas"
				id="github-footer"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</footer>
);
