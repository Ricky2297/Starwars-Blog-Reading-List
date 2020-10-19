import React, { useContext, useState } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropDown, setClickedDropDown] = useState(false);
	let show = "";
	if (clickedDropDown) show = "show";

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
				<a className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
					<button
						className="faves btn btn-outline-danger nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded={clickedDropDown}
						onClick={() => setClickedDropDown(!clickedDropDown)}>
						FAVORITES <span className="badge badge-danger">{store.favorites.length}</span>
					</button>
					<div
						className={store.favorites.length > 0 ? "dropdown-menu " + "show" : "d-none"}
						aria-labelledby="navbarDropdown">
						{store.favorites.length > 0
							? store.favorites.map((elm, index) => (
									<li
										key={index}
										className="dropdown-item d-flex align-items-center justify-content-between bg-dark text-danger">
										<Link to={`/details/${index + 1}`}>{elm.name}</Link>
										&nbsp;&nbsp;
										<i
											className="fas fa-backspace"
											onClick={() => actions.deleteFromFavorites(elm)}
										/>
									</li>
							  ))
							: null}
					</div>
				</a>
			</nav>
		</div>
	);
};
