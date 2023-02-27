import React, { useContext,useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import imgSrc from "../../img/Star_Wars_Logo.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-dark mb-3 d-flex fixed-top ">
			<div className="w-50">
				<Link to="/" className="">
					<img src={imgSrc} className="w-25 navbar-brand mb-0 ms-3"/>
				</Link>
			</div>
			<div className="btn-group me-5">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
					Favorites
				<span className="ms-2 bg-secondary px-2 py-1">{store.swFav.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.swFav.length == 0 ? <li className="text-center"><span className="ms-2 text-decoration-none"> ( lista vacia )</span></li>
					: store.swFav.map((item,index)=>{
							return(
							<li key={index} id={index} className="d-flex justify-content-between align-items-center mt-2">					
								<Link className="ms-2 text-decoration-none" to={`/${item.vista}/${item.id}`}>
									{item.name}
								</Link>			
								<i className="me-2 fa-solid fa-trash" onClick={(e)=>actions.filtrarFav(e.target.parentElement.id)}/>
							</li>
							)
						})
						}	
				</ul>
			</div>
		</nav>
	);
};
