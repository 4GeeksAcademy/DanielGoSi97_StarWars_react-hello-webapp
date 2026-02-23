import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import Card_Characters from "../components/Card_Characters.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [starships, setStarships] = useState([])
  const [characters, setcharacters] = useState([])

	function getStarships(){
		fetch('https://swapi.dev/api/starships')
		.then((response) => response.json())
		.then((data) => {
			setStarships(data.results)			
		})
	}

	useEffect(()=>{
		getStarships()
	},[])


	function getCharacters(){
		fetch('https://swapi.dev/api/people')
		.then((response) => response.json())
		.then((data) => {
			setcharacters(data.results)			
		})
	}

	useEffect(()=>{
		getCharacters()
	},[])	

	return (
		<>
			<div className="text-start mt-5">
				<h1 className="ms-2">Naves API</h1>
				<br />
				<div className="d-flex row flex-nowrap overflow-x-auto gap-3">
					{starships.map((nave) => <Card key={nave.url} nave={nave} uid={nave.url.replace('https://swapi.dev/api/starships/','').replace('/','')}/>)}
				</div>
				
			</div>
			<div className="text-start mt-5">
				<h1 className="ms-2">Personajes API</h1>
				<br />
				<div className="d-flex row flex-nowrap overflow-x-auto gap-3">
					{characters.map((personajes) => <Card_Characters key={personajes.url} characters={personajes} uid={personajes.url.replace('https://swapi.dev/api/people/','').replace('/','')}/>)}
				</div>
				
			</div>				
		</>

	);
}; 