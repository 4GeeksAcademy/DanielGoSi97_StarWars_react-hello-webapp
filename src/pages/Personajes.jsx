// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Personajes = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  console.log("View Personajes")
  console.log(useParams())
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { personajeId } = useParams()

  const [detallePersonajes, setDetallePersonajes] = useState({})


  useEffect(()=>{
    fetch('https://www.swapi.tech/api/people/'+personajeId)
    .then((response) => response.json())
    .then((data) => setDetallePersonajes(data.result.properties))
  },[])

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">Personaje: {personajeId}</h1>
      <h1 className="display-4">Name: {detallePersonajes.name}</h1>
      <h1 className="display-4">Gender: {detallePersonajes.gender}</h1>
      <h1 className="display-4">Hair Color: {detallePersonajes.hair_color}</h1>
      <h1 className="display-4">Eye Color: {detallePersonajes.eye_color}</h1>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Personajes.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
