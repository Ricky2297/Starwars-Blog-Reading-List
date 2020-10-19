import React from "react";
import { Planet } from "../component/planet";
import { Character } from "../component/character";
import { Details } from "./details";
import { PlanetDetails } from "./planetDetails";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

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

	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div>
						<h1>Characters</h1>
						<div id="characterConteiner" className="d-flex ">
							{store.characters
								? store.characters.map((character, index) => <Character key={index} char={character} />)
								: null}
						</div>
						<h1>Planets</h1>
						<div id="characterConteiner" className="d-flex">
							{store.planets
								? store.planets.map((planet, index) => <Planet key={index} plan={planet} />)
								: null}
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

//Component : datails, character card , planet card , home js

//run 2 fetches on home.js : planets, characters

//create 2 arrays in state: planets, character

//make home.js a class component

//we need 2 map () : planets, character
