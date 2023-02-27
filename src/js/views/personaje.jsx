import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Personaje = props => {
	const { store, actions } = useContext(Context);
	const [charsData, setCharsData] = useState({});
	const params = useParams();
	let newUid = params.uid;
	let newVista = params.vista;
	let newPeople = "";
	let infoArray =[{}];
	let url = `https://www.swapi.tech/api/${newVista}/${newUid}`;

	const handleInfo= async(url)=>{
        const swDataFetch = await actions.getInfoSw(url);
		setCharsData(swDataFetch.result.properties);     
    }

    useEffect(()=>{
        handleInfo(url);
    },[])

	const newDraw=(url)=>{
		handleInfo(url);

	return(
		<div className="row g-0">
			<div className="col-md-4">
				<div  style={divStyle} className="card-img-top" alt="..."/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">{charsData.name}</h5>
					<p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ea architecto. Fuga libero quasi, totam nisi dolores molestias recusandae ipsum iusto illum eius voluptate. Laboriosam officiis dicta repellendus dolor modi.</p>							
					<div className="container">
						{
							infoArray.map((item,index)=>{
								return (
								<div className="row" key={index}>
									<div className="col-3">
										{item.topic}
									</div>
									<div className="col">
										{item.info}
									</div>
								</div>)
							})
						}
					</div>			
				</div>
			</div>
		</div>
	)

	}






	if (newVista=="people") {
		infoArray[0]={
			topic:"Mass:",
			info:`${charsData.mass} kg`
		}
		infoArray[1]={
			topic:"Height:",
			info:`${charsData.height} kg`
		}
		infoArray[2]={
			topic:"Birth Year:",
			info: charsData.birth_year
		}
		infoArray[3]={
			topic:"Skin color:",
			info: charsData.skin_color
		}
		infoArray[4]={
			topic:"Gender:",
			info: charsData.gender
		}
		infoArray[5]={
			topic:"Eye color:",
			info: charsData.eye_color
		}
		newPeople = "characters"}
	if (newVista=="vehicles"){
		infoArray[0]={
			topic:"Model:",
			info:charsData.model
		}
		infoArray[1]={
			topic:"Manufacturer:",
			info:charsData.manufacturer
		}
		infoArray[2]={
			topic:"Cost in credtis:",
			info: charsData.cost_in_credits
		}
		infoArray[3]={
			topic:"vehicle class:",
			info: charsData.vehicle_class
		}
		infoArray[4]={
			topic:"cargo capacity:",
			info: charsData.cargo_capacity
		}
		infoArray[5]={
			topic:"Crew:",
			info: charsData.crew
		} 
		newPeople = "vehicles"}
	if (newVista=="planets") {
		infoArray[0]={
			topic:"Diameter:",
			info:charsData.diameter
		}
		infoArray[1]={
			topic:"Population:",
			info:charsData.population
		}
		infoArray[2]={
			topic:"Terrain:",
			info: charsData.terrain
		}
		infoArray[3]={
			topic:"Gravity:",
			info: charsData.gravity
		}
		infoArray[4]={
			topic:"Climate:",
			info: charsData.climate
		}
		infoArray[5]={
			topic:"Rotation period:",
			info: charsData.rotation_period
		} 
		newPeople = "planets"}
    let imgUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    let imgUrl2= `https://starwars-visualguide.com/assets/img/${newPeople}/${newUid}.jpg`;

    const divStyle = {
        backgroundImage: `url(${imgUrl2}) , url(${imgUrl})`,
        width:"250px",
        height:"300px",
        backgroundSize:"cover"
    };

	return (
		<div className="marge-sup">
			<div className="card mb-3 " >
				{newDraw(url)}
			</div>
			<Link to="/">
			<span className="btn btn-primary btn-lg" href="#" role="button">
				Back home
			</span>
			</Link>
		</div>
	
	);
};

Personaje.propTypes = {
	match: PropTypes.object
};
