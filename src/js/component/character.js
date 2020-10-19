import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);

	const found = store.favorites.find(element => element.name == props.char.name);

	return (
		<div className="d-inline-flex pr-5 ">
			{/* post */}
			<div id="characters" className="card mt-5 bg-dark " style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://lumiere-a.akamaihd.net/v1/images/vicruls-sythe-main_e404bc44.jpeg"
					alt="Card image cap"
				/>
				<div id="charactersInfo" className="card-body">
					<h5 className="card-title">{props.char.name}</h5>
					<p> Height= {props.char.height}</p>
					<p> Mass= {props.char.mass}</p>
					<p> Gender= {props.char.gender}</p>
					{/* <p> Hair Color= {props.char.hair_color}</p>
					<p> Skin Color= {props.char.skin_color}</p>
					<p> Eye Color= {props.char.eye_color}</p> */}

					<Link
						to={{
							pathname: `/details/${props.index + 1}`,
							state: {
								character: props.char
							}
						}}>
						<button href="#" className="mt-2 btn btn-outline-danger">
							Learn More!
						</button>
					</Link>

					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={found ? null : () => actions.addFavorites(props.char.name)}>
						{<i className="fas fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	char: PropTypes.object,
	character: PropTypes.object,
	index: PropTypes.number,
	name: PropTypes.string
};
