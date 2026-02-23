import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa"

const Card_Characters = (props) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/1075/150/150" className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.characters.name}</h5>
                    <p className="card-text">Gender: {props.characters.gender}</p>
                    <p className="card-text">Hair Color: {props.characters.hair_color}</p>
                    <p className="card-text">Eye Color: {props.characters.eye_color}</p>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link to={"/personajes/"+props.uid} className="btn btn-primary">Detail Character: {props.uid}</Link>
                        <button onClick={() => dispatch({
                            type: 'toggle_personajes',
                            payload: props.characters.name })}>
                                {store.personajesFavoritos.includes(props.characters.name) ? (<FaHeart style={{color:'red'}} />):(<FaRegHeart />)}
                        </button>    
                    </div>
                </div>
            </div>        
        </>

    )
}

export default Card_Characters