import React , {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Card } from "./Card.jsx";
import { Context } from "../store/appContext";


export  const CardPersonajes = ({resource})=>{
    const [swData, setCharsData] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    const {store, actions} = useContext(Context);
    const url = `https://www.swapi.tech/api/${resource}`;

    const handleInfo= async(url)=>{
        const swDataFetch = await actions.getInfoSw(url);
        setCharsData(swDataFetch.results);   
        setNextPage(swDataFetch.next);
        setPrevPage(swDataFetch.previous);      
    }

    useEffect(()=>{
        handleInfo(url);
    },[])



    return (
        <div className="mx-5">
			<h3>Personajes</h3>
            <nav aria-label="Page navigation example ">
                <ul className="pagination my-5">
                    <li className="page-item" type="button"><a onClick={()=>{handleInfo(prevPage)}} className="page-link" >Previous</a></li>
                    <li className="page-item" type="button"><a onClick={()=>{handleInfo(nextPage)}} className="page-link" >Next</a></li>
                </ul>
            </nav>
            <div className="d-flex justify-content-between bg-light scroll p-4">
                {
                    swData.map((item, index) =>{
                        let name = item.name;
                        let url= item.url;
                        let uid=item.uid
                        return (
                            <Card name={name} url={url} uid={uid} key={index} tipo="characters" vista="people"/>                            
                        )
                    }
                    )
                }
            </div>
		</div>
    );



}