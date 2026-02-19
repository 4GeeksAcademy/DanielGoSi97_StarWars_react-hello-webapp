// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Nave = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  console.log("View Nave")
  console.log(useParams())
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { naveId } = useParams()

  const [detalleNave, setDetalleNave] = useState({})


  useEffect(()=>{
    fetch('https://www.swapi.tech/api/starships/'+naveId)
    .then((response) => response.json())
    .then((data) => setDetalleNave(data.result.properties))
  },[])

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">Nave: {naveId}</h1>
      <h1 className="display-4">Name: {detalleNave.name}</h1>
      <h1 className="display-4">Manufacturer: {detalleNave.manufacturer}</h1>
      <h1 className="display-4">Model: {detalleNave.model}</h1>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Nave.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
