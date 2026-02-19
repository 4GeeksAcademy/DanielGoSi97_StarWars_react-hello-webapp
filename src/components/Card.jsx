import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/1050/150/150" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Modelo: {props.model}</p>
                <Link to={"/nave/"+props.uid} className="btn btn-primary">Go somewhere {props.uid}</Link>
            </div>
            </div>        
        </>

    )
}

export default Card