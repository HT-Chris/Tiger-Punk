import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import { useContext } from "react";
import { TigerPunkContext } from "../Components/TigerPunkContext";


export const Cart = () => {
	const {cart, removeItem, updateCart} = useContext(TigerPunkContext)


	return (
		<>
		<NavBar/>
		<div id="cart-page">
			<h1>Cart</h1>
			{cart.length == 0 ? 
			<h1>Your cart is empty</h1>
				:		
				<>
				{cart.map((item, index) => (
					<div className="cart-item" key={index}>
						<img src={item.imageUrl} alt={item.name} />
						<div className="cart-item-details">
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<p>${item.price}</p>
							<input type="number" name="" className='input' value={item.quantity} onChange={(e)=>updateCart(item.id, Number(e.target.value))}/>
							<button className="btn" onClick={()=>removeItem(item.id)}>Remove</button>
						</div>
					</div>
				))}
				</>	
			}
		</div>
		<Footer/>
		</>
	)
}

