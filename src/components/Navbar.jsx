import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">

			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAACMjIzS0tIeHh4YGBiwsLDZ2dnMzMwbGxvt7e36+voSEhJsbGzV1dWdnZ2GhoZGRkY6OjqWlpbDw8Pl5eWqqqq2trZaWloxMTFLS0s/Pz8kJCT09PRTU1N8fHx0dHRkZGSRzcVVAAAF8klEQVR4nO2aW7OyOgyGQVS0oCIHj4D6///kB5QmaUsLrNkX+yLPzJpZ1B5ee0jSYBAwDMMwDMMwDMMwDMMwDMMwDMMw/wuSQ7FZRlb29UWmFe6xp2qy1b1Zryk+hYvJ+gYXveyIXR2mW7XlWk3RcklhuOlb/IzCGPtKHe0u6zSJ61pRVe4c0SlqparPGk2DqLtZ+EvmRYWrVnCVpkGU9TWe1QJRp8QjwuC8XpRdel8gKjwsF+U4Lx5RMTxs1T+ZLep5G7jgjr0tF4VDhOH1RPhC8QMLf51NKnAYJeGplgZFvdQAb/J9FoOa0jghBNB/FJDSoPmp8ryCaVBGAUVdlcEEo1asEEXO91fbi1B81qe2xq++MZdmQtRNleyD5VDzrM2wQ9Qeyks0DidL1Gv8ggnM5oqNrhtPauIcolpVXDeBeMJKmqLqTKJqhC+xQpRmC3fExE2LSqD4FxCHU5qiLNbs80A3hjv0Y9Oi0IT0xgk2TDYnKl01Ud15+pLGOMvTomBv1/2KgUF5z4las80HEqoKTu6kKPFSpd+hJeywyi9qheVUNCSieiu7MCkKvdJp3xns/UMf1SGqiK0hKSK2qYTIsIOtV9RlYkip0ScqK7UBze2VhUeLuq5JB/6Zau0Rx2aVLur11T6m41kHMbN6M2kDjyjhbJaWhih0RxbZalE/nygrvkM2uqhr0rxcVdeL2vhEecLU3BDV2GHzn0VtI48o4RqmR5iiguo5XXO1qG/gEYXm/FKO3GHguyUqiKZVrRV1FT5RYM7zwC772KKCeFLVSlGvCqtOiIKAggRsMHv997HiqfPUgtuitk6ejxuN8rZHWYx3zTiVRccntdDXnSw8dgFTVI+Ndu0Y5Ilvbo5j2akqchPrl6CzKodMgICak112M9VEdpUqNgeqAuZvRLf9yOAWKnjcD9s5uatHWT0+aJD1TQ4TxFbORxz2FjczWkc/MRx+vMPJazVkYKQHTN7pjqB7wZ1N/Sr0fXl5T4UN5ulr4JO009s8sGbabz/jzmTe6YklcLnmnExD8puuY4oKUEZ3c6lozFKSQLKWc2JGTz/sxxkv1HjuCkcVSxSO012sS1r1283Mbvz/MaxC8gh1yIDuIKZWJ94ZG1uioiN8JnT7njfm5cR2EvcFogZ/0+MMKSxReGPtRnhrdcvgp/6VocI+NPksEZWO81m7KliiiP7M6LgQqputPNp6RNuTJ7aoNH/nefeHteQpEUeruVMUhh/tTa/7AHvxlZOqdlj4stIrRFTe25ZObAmLLX1bA+mrHmpZ7Msy3P/DreHBdzD03ZB/g3NUOET1QKVxJsiO3AvKRFrdXhST8ZDhMajgmIJRmBAFEz0qJ5fJ2USCvX1NpEFo4DrVJjC9kHOdEAWW926IDOdvyLHzVChkQiiCegX51soooKhnOQQ550JtbHX6aJIpvU+LAZwXSoVhznuHZKZXqElIJfAMN0c6Vel5SgrivHqP1PLcw7Ut7y8m6mFrizLBHNePlOb+0M58GVNv9Wc5GYn23BjpFY8okjkV1E+9vdn9Rjfk4cd4iyWXH/3i4PfhvN9mROU0fSHoULbNpGz0bkr9Mj7OM1j+Ou5tC+ZcE5+o90ZPqYgf+dCbijUyAqLSHuWomB1L8x6whDK94hL1NdM8dK98TCGafM37t+Q+1yMjYffrkdIQVWuOYdfStxZZRrMcD+/6aZvoZqynnAlXgKa2Bop6R07Pa9D6NAXUE/f5YBrsjSlVR26iozZE5SKaNceSn0eS/paoNdIjG2NMG2GK8qWtKH4PSOPc3qckuJ67gzWXJntL1EJV/nQs3TFDkIlGXhoETGLXDwXM5iexRM16CWjn4YCeyljP7/CM64nuHTbeoNuMEuZVvebe16JRkLYDg0wzvkOPlZAXgBOhy1xEdJpPa8DylMaz0B/pgYGgL9NEqRDr7ss9tkteg5yLy8BttMCRfLzs5Rxf1C9CItImVoX9kjbw05JCRbfV2KrQGEY5/OGHJQzDMAzDMAzDMAzDMAzDMAzDMMx/yT/bg1dQrU/cnwAAAABJRU5ErkJggg=="
			alt="..."
			className="ms-2"
			style={{width: "70px",
				height: "70px",
				objectFit: "contain"
			}}/>

				<div className="container-fluid d-flex justify-content-end" style={{ width: "90%" }}>
					<button className="btn btn-primary dropdown-toggle ms-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
						{/* {store.navesFavoritas.map((nave, index)=><p key={index}>{nave}</p>)}
						{store.personajesFavoritos.map((personaje, index)=><p key={index}>{personaje}</p>)} */}
					</button>
					  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
						{store.navesFavoritas.map((nave, index)=><li key={'nave-${index}'}>
							<a className="dropdown-item">{nave}</a>
							</li>)}
						{store.personajesFavoritos.map((personaje, index)=><li key={'personaje-${index}'}>
								<a className="dropdown-item">{personaje}</a>
							</li>)}
						{store.planetasFavoritos.map((planeta, index)=><li key={'planeta-${index}'}>
								<a className="dropdown-item">{planeta}</a>
							</li>)}							
					</div>
				</div>
		</nav>
	);
};