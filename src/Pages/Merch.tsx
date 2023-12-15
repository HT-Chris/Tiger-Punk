import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"
import { products } from "../assets/Products/ProductsList";
import { Link } from "react-router-dom";

export const Merch = () => {

	return ( 
		<>
		<NavBar/>
		<div id="merch-page">

			{products.map((product) =>
			<div className="polaroid-card product-card"  key={product.id}>
				<Link to={`/product/${product.id}`}>
			<div className="polaroid-img-container">
				<img className='polaroid-img product-card-img' src={product.imageUrl} alt={`${product.name}`} />
			</div>
			
			<h2>{product.name}</h2>
				<p>${product.price}</p>
				</Link>
			</div>
			)}

		</div>
		
		<Footer/>
		</>
	)
}