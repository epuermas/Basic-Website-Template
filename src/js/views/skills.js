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
			<br />
			<div className="skills-languages-top d-flex justify-content-center">
				<img
					className="html5"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
				/>
				<img
					className="css3"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
				/>
				<img className="bootstrap" src="https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" />
				<img className="js" src="https://i.ya-webdesign.com/images/vector-javascript-1.png" />
			</div>
			<div className="skills-languages-middle d-flex justify-content-center">
				<img
					className="react"
					src="https://www.fullstacklabs.co/img/pages/DeveloperProfile/technologyLogos/tech_react.png"
				/>
				<img className="restapi" src="https://i.imgur.com/ri0FMgm.png" />
				<img
					className="postman"
					src="https://s3.amazonaws.com/media-p.slid.es/uploads/327261/images/5065937/pm-logo-vert.png"
				/>
				<img className="github" src="https://pngimg.com/uploads/github/github_PNG20.png" />
			</div>
			<div className="skills-languages-below d-flex justify-content-center">
				<img className="python" src="https://www.101computing.net/wp/wp-content/uploads/python-logo-1.png" />
				<img className="nodejs" src="https://pluspng.com/img-png/nodejs-logo-png-node-js-development-296.png" />
				<img
					className="mysql"
					src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png"
				/>
				<img
					className="flask"
					src="https://www.probytes.net/wp-content/uploads/2018/10/flask-logo-png-transparent.png"
				/>
			</div>
		</div>
	);
};
