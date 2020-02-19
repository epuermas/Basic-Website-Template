import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Jumbotron = () => {
	return (
		/*modal*/
		<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 className="modal-title" id="myModalLabel">
							Modal title
						</h4>
					</div>
					<div className="modal-body">...</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
