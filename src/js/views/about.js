import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="about-content">
			<div className="about-header d-flex justify-content-center">
				<h1>About</h1>
			</div>
			<div className="about-text d-flex justify-content-center">
				<p>
					{
						" '' Biographies on websites don't tell you what you want to know, they tell you what people want you to know. '' "
					}
				</p>
			</div>
			<br />
			<div className="about-me-info">
				<div className="face-photo-first">
					<img src="https://pbs.twimg.com/profile_images/943488527404281857/v9q4Vdqp_400x400.jpg" />
				</div>
				<div className="about-me-card-first card d-flex justify-content-center">
					<div className="about-me-card-body card-body">
						<p className="about-card--text card-text">
							{
								"I was born in Havana, Cuba.   At the age of 3, I moved to Santo Domingo, Dominican Republic.   There, I attended school from Pre-K until 5th grade.  At the age of 10, my mother decided to travel to Miami, FL, USA to pursue a better future.  Once I arrived at Miami, the change of scenery was a shock for me, I learned how to follow the way of life and continued on with my academic progress.  I attended Rockway Middle School and Miami Coral Park Senior High School, ultimately graduating from both."
							}
							{
								"  At this point, I was unsure how to proceed and follow the path of a web developer.  I decided to attend Miami-Dade College to pursue a degree in Computer Science.  A few years into it, I was let down, I had not seen a single line of code in all my time spent at Miami-Dade College, this prompted me to look for other options.  After months of research, I found a coding bootcamp with a promising curriculum, I enrolled and the rest is history..."
							}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
