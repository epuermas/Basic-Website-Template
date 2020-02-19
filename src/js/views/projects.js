import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Projects = props => {
	const { store, actions } = useContext(Context);
	return <div className="projects" />;
};
