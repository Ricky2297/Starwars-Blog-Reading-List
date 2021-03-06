import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-inline-flex pr-5 ">
			{/* post */}
			<div id="planet" className="card  mt-5 bg-dark " style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=960"
					alt="Card image cap"
				/>
				<div id="planetInfo" className="card-body ">
					<h5 className="card-title">{props.plan.name}</h5>
					<p> Rotation Period= {props.plan.rotation_period}</p>
					<p> Orbital Period= {props.plan.orbital_period}</p>
					<p>Diameter= {props.plan.diameter}</p>
					{/* 
					<p>Climate= {props.plan.climate}</p>
					<p>Gravity= {props.plan.gravity}</p>
					<p>Terrain= {props.plan.terrain}</p>
					<p>Surface Water= {props.plan.surface_water}</p>
					<p>Population= {props.plan.population}</p> */}
					<Link
						to={{
							pathname: `/planets/${props.index + 1}`,
							state: {
								planet: props.plan
							}
						}}>
						<button href="#" className="mt-2 btn btn-outline-danger">
							Learn More!
						</button>
					</Link>

					<button
						type="button"
						id="like"
						className="btn btn-outline-warning"
						onClick={() => actions.addFavorites(props.plan.name)}>
						{<i className="fas fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	plan: PropTypes.object,
	index: PropTypes.number
};
