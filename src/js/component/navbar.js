import React from "react";
import PropTypes from "prop-types";

export const Navbar = () => {
	return (
		<div>
			<nav id="navbar" className="navbar navbar-light bg-light justify-content-between">
				<a id="logo" className="navbar-brand">
					<img
						className="card-img-top"
						src="https://www.theforce.net/fanfilms/postproduction/crawl/starwarslogo.jpg"
					/>
					{/* <i className="fab fa-galactic-senate text-danger" />
					<h1 id="wars">Star Wars</h1> */}
				</a>

				<form className="form-inline">
					<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
						Favorites
					</button>
				</form>
			</nav>
		</div>
	);
};
