import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
	


export  const Card = (props)=>{
    const { store, actions } = useContext(Context);
    let imgUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    let imgUrl2= `https://starwars-visualguide.com/assets/img/${props.tipo}/${props.uid}.jpg`;


    const divStyle = {
        backgroundImage: `url(${imgUrl2}) , url(${imgUrl})`,
        width:"250px",
        height:"300px",
        backgroundSize:"cover"
    };

    const verifyClick =(nameCard)=>{
        for (let i =0; i<store.swFav.length; i++){
            if (store.swFav[i].name == nameCard)
            return i;
        } return null;

    }


    return(
        <div  className="card mx-3 card-personaje " >
        <div  style={divStyle} className="card-img-top" alt="..."/>
        <div className="card-body ">
            <h5 className="card-title">{props.name}</h5>
            <div className="d-flex justify-content-between"> 
                <Link to={`/${props.vista}/${props.uid}`}>
                <span  className="btn btn-primary">View More</span>
                </Link>
                <span className="btn btn-primary" onClick={()=>{verifyClick(props.name)!=null?actions.filtrarFav(verifyClick(props.name)):actions.agregarAFav(props.name,props.vista,props.uid )}
                    } role="button">
                <i className={`fa-solid fa-heart ${verifyClick(props.name)!=null?"heart-color":""}`} />
                </span>
            </div>
        </div>
    </div>
    )

}
