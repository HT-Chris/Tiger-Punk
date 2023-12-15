import {  useParams  } from 'react-router-dom'
import { products } from '../assets/Products/ProductsList'
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { productType, TigerPunkContext } from './TigerPunkContext';
import { useContext, useState } from 'react';


export const ProductDetails = () => {
	const {updateCart, cart} = useContext(TigerPunkContext)
	const { productId } = useParams<{ productId: string }>();
	const product = products.find((product:productType) => product.id === Number(productId));
	const [itemQuantity, setItemQuantity] = useState(0)

	const updateItemQuantity = (event:React.ChangeEvent<HTMLInputElement>) => {
		setItemQuantity(Number(event.target.value))
	}

	console.log(cart)

	if (!product) {
		return <div>Product not found</div>;
	}
  
	return (
		<>
		<NavBar/>
		<div className='product-details-page'>
			<div className="product-details-img-container">
			<img className='product-details-img' src={product.imageUrl} alt={product.name} />
			</div>

			<div className="product-details-text">
			<h2 className='product-name'>{product.name}</h2>
			<p className='product-price'>${product.price}</p>
			<p>{product.description}</p>
			<input type="number" name="" className='input' onChange={updateItemQuantity} />
			<button className="btn"onClick={()=>updateCart(product.id, itemQuantity)}>Add To Cart</button>
			</div>
		</div>
		<Footer/>
		</>
	);
  };