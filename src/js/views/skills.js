import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Context } from "../store/appContext";

export const Skills = () => {
	return (
		<div className="skills-content">
			<div className="skills-header d-flex justify-content-center">
				<h1>Skills</h1>
			</div>
			<p className="skills-text d-flex justify-content-center">
				These are the languages I have learned so far, the list is growing and constantly being updated.
			</p>
			<div className="skills-languages d-flex justify-content-start">
				<img
					className="html5"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
				/>
			</div>
		</div>
	);
};
