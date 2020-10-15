import React from "react";
import { Planet } from "../component/planet";
import { Character } from "../component/character";
import { Details } from "./details";
import { PlanetDetails } from "./planetDetails";
import { Navbar } from "../component/navbar";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			planets: ["Jupiter", "Mom", "Romant", "Capital"],
			characters: ["George", "Sam", "Jeffery", "Ricky"]
		};
	}

	componentDidMount() {
		//Characters
		fetch("https://swapi.dev/api/people/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ characters: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		///Planets
		fetch("https://swapi.dev/api/planets/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ planets: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	render() {
		return (
			<div>
				<h1>Characters</h1>
				<div id="characterConteiner" className="d-flex ">
					{this.state.characters.map((character, index) => (
						<Character key={index} char={character} />
					))}
				</div>
				<h1>Planets</h1>
				<div id="characterConteiner" className="d-flex">
					{this.state.planets.map((planet, index) => (
						<Planet key={index} plan={planet} />
					))}
				</div>
			</div>
		);
	}
}

//Component : datails, character card , planet card , home js

//run 2 fetches on home.js : planets, characters

//create 2 arrays in state: planets, character

//make home.js a class component

//we need 2 map () : planets, character
