import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Card = (props) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/1050/150/150" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nave.name}</h5>
                <p className="card-text">Modelo: {props.nave.model}</p>
                <p className="card-text">Manufacturer: {props.nave.manufacturer}</p>
                <Link to={"/nave/"+props.uid} className="btn btn-primary">Go somewhere {props.uid}</Link>
                <button onClick={() => dispatch({
                    type: 'toggle_nave',
                    payload: props.nave.name
                })}>Agregar a favoritos</button>
            </div>
            </div>        
        </>

    )
}

export default Card