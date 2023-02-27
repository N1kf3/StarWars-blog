import React from "react";
import "../../styles/home.css";
import {CardPersonajes } from "../component/CardPersonajes.jsx";
import {CardPlanetas } from "../component/CardPlanetas.jsx";
import {CardVehiculos} from "../component/CardVehiculos.jsx";

export const Home = () => (

	<div className="marge-sup">
		<CardPersonajes resource="people"/>
		<CardPlanetas resource="planets"/>
		<CardVehiculos resource="vehicles"/>
	</div>
);
