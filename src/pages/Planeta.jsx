// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Planeta = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  console.log("View Planeta")
  console.log(useParams())
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { planetaId } = useParams()

  const [detallePlaneta, setDetallePlaneta] = useState({})


  useEffect(()=>{
    fetch('https://www.swapi.tech/api/planets/'+planetaId)
    .then((response) => response.json())
    .then((data) => setDetallePlaneta(data.result.properties))
  },[])

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">Planeta: {planetaId}</h1>
      <h1 className="display-4">Name: {detallePlaneta.name}</h1>
      <h1 className="display-4">Clima: {detallePlaneta.climate}</h1>
      <h1 className="display-4">Terreno: {detallePlaneta.terrain}</h1>
      <h1 className="display-4">Gravedad: {detallePlaneta.gravity}</h1>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Planeta.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
