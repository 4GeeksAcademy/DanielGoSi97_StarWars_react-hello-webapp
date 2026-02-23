import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa"

const Card = (props) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/1050/150/150" className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.nave.name}</h5>
                    <p className="card-text">Modelo: {props.nave.model}</p>
                    <p className="card-text">Manufacturer: {props.nave.manufacturer}</p>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link to={"/nave/"+props.uid} className="btn btn-primary">Detail Starship: {props.uid}</Link>
                        <button onClick={() => dispatch({
                            type: 'toggle_nave',
                            payload: props.nave.name})}>
                                {store.navesFavoritas.includes(props.nave.name) ? (<FaHeart style={{color:'red'}} />):(<FaRegHeart />)}
                        </button>
                    </div>
                </div>
            </div>        
        </>

    )
}

export default Card