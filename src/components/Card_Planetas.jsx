import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa"

const Card_Planetas = (props) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/1050/150/150" className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.planeta.name}</h5>
                    <p className="card-text">Clima: {props.planeta.climate}</p>
                    <p className="card-text">Terreno: {props.planeta.terrain}</p>
                    <p className="card-text">Gravedad: {props.planeta.gravity}</p>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link to={"/planetas/"+props.uid} className="btn btn-primary">Detail Planet: {props.uid}</Link>
                        <button onClick={() => dispatch({
                            type: 'toggle_planetas',
                            payload: props.planeta.name})}>
                                {store.planetasFavoritos.includes(props.planeta.name) ? (<FaHeart style={{color:'red'}} />):(<FaRegHeart />)}
                        </button>
                    </div>
                </div>
            </div>        
        </>

    )
}

export default Card_Planetas