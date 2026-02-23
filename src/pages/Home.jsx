import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import Card_Characters from "../components/Card_Characters.jsx";
import Card_Planetas from "../components/Card_Planetas.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [starships, setStarships] = useState([])
  const [characters, setcharacters] = useState([])
	const [planetas, setPlanetas] = useState([])

	function getStarships(){
		fetch('https://swapi.dev/api/starships')
		.then((response) => response.json())
		.then((data) => {
			setStarships(data.results)			
		})
	}

	function getCharacters(){
		fetch('https://swapi.dev/api/people')
		.then((response) => response.json())
		.then((data) => {
			setcharacters(data.results)			
		})
	}

	function getPlanets(){
		fetch('https://swapi.dev/api/planets')
		.then((response) => response.json())
		.then((data) => {
			setPlanetas(data.results)
			console.log(data.results)			
		}
	)
	}

	useEffect(()=>{
		getPlanets()
		getCharacters()
		getStarships()
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
				<div className="text-start mt-5">
				<h1 className="ms-2">Planetas API</h1>
				<br />
				<div className="d-flex row flex-nowrap overflow-x-auto gap-3">
					{planetas.map((planeta) => <Card_Planetas key={planeta.url} planeta={planeta} uid={planeta.url.replace('https://swapi.dev/api/planets/','').replace('/','')}/>)}
				</div>
				
			</div>						
		</>

	);
}; 