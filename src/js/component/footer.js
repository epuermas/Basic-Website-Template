import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-2 text-center">
		<p className="footer-text">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="" target="_blank" rel="noopener noreferrer">
				Insert your name
			</a>
		</p>
		<div className="footer-icons align-self-center">
			<a className="fab fa-linkedin" a href="" id="linkedin-footer" target="_blank" rel="noopener noreferrer" />
			<a
				className="fab fa-github-square"
				a
				href=""
				id="github-footer"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</footer>
);
