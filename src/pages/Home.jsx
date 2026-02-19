import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [starships, setStarships] = useState([])

	function getStarships(){
		fetch('https://swapi.dev/api/starships')
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results)
			setStarships(data.results)			
		})
	}

	useEffect(()=>{
		getStarships()
	},[])


	return (
		<div className="text-center mt-5">
			<h1>Naves API</h1>
			<div className="d-flex row flex-nowrap overflow-x-auto gap-3">
				{starships.map((nave) => <Card key={nave.url} nave={nave} uid={nave.url.replace('https://swapi.dev/api/starships/','').replace('/','')}/>)}
			</div>
			
		</div>
	);
}; 