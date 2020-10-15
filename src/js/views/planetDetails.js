import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class PlanetDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}
	componentDidMount = () => {
		//const { handle } = this.props.match.params;
		const { planet } = this.props.location.state;
		this.setState({ results: planet });
		// fetch("https://swapi.co/api/people/" + this.props.match.params.id + "?format=json")
		// 	.then(res => res.json())
		// 	.then(response => {
		// 		//console.log("Success:", typeof response);
		// 		//	console.log(response);
		// 		if (typeof response === typeof {}) {
		// 			this.setState({ results: response });
		// 			//console.log(this.state);
		// 		} else {
		// 			this.setState({ results: [] });
		// 		}
		// 	})
		// 	.catch(error => console.error("Error:", error));
	};
	render() {
		// if (!this.state.results) return <p className="p-5">Loading...</p>;
		console.log("Results: ", this.state.results);
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img
							src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=960"
							className="w-100"
						/>
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2 className="text-danger">{this.props.location.state.planet.name}</h2>
							<p className="text-danger">Sed ut perspiciatis</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.props.location.state.planet.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>rotation period</h6>
							<p className="text-center">{this.props.location.state.planet.rotation_period}</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>orbital period</h6>
							<p>{this.props.location.state.planet.orbital_period}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>diameter</h6>
							<p>{this.props.location.state.planet.diameter}</p>
						</div>
						<div className="dimensions p-2 m-3">
							<h6>climate</h6>
							<p className="text-center">{this.props.location.state.planet.climate}</p>
						</div>
						<div className="species p-2 m-3">
							<h6>gravity</h6>
							<p>{this.props.location.state.planet.gravity}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
PlanetDetails.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
