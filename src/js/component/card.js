import React from "react";
import { Link } from "react-router-dom";

//Card component
export const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://i.imgur.com/ei6DyqF.jpg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Conditional Profile</h5>
                {/* Inser your own info */}
				<p className="card-text">Profile card that can be customized using user-input.</p>
				<a href="#" className="btn btn-primary">
					GitHub
				</a>
			</div>
		</div>
	);
};
