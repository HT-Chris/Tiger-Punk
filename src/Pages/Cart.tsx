import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import { useContext, useState } from "react";
import { TigerPunkContext } from "../Components/TigerPunkContext";


export const Cart = () => {
	const [isCheckedOut, setIsCheckedOut] = useState(false)
	const {cart, removeItem, updateCart, clearCart} = useContext(TigerPunkContext)


	const checkoutBtn = (set:boolean) =>{
		setIsCheckedOut(set)
		setTimeout(() => {
			setIsCheckedOut(false)
		}, 3000);
	}

	const checkBtn = () => {
		setIsCheckedOut(true)
		clearCart()
	}
	return (
		<>
		<NavBar/>


		<div id="cart-page">

			<div className={`checkout-message ${isCheckedOut ? '' : 'hide'}`}>
				<h2>You Checked Out!</h2>
				<button className="btn" onClick={()=>checkoutBtn(false)}>Back</button>
			</div>
			<h1>Cart</h1>
			{cart.length == 0 ? 
			<h1>Your cart is empty</h1>
				:		
				<>
				{cart.map((item, index) => (
					<div className="cart-item" key={index}>
						<img className="cart-img-container " src={item.imageUrl} alt={item.name} />
						<div className="cart-item-details">
							<h2>{item.name}</h2>
							<p>${item.price}</p>
							<select className="cart-input" value={item.quantity} onChange={(event) => item.id && updateCart(item.id, parseInt(event.target.value))}>
								{[...Array(10).keys()].map((value) => (
									<option key={value} value={value + 1}>
									{value + 1}
									</option>
								))}
								</select>
							{/* <input type="number" name="" className='input cart-input' value={item.quantity} onChange={(e)=>updateCart(item.id, Number(e.target.value))}/> */}
							<button className="btn" onClick={()=>removeItem(item.id)}>Remove</button>
						</div>
					</div>
				))}
				</>	
			}
			<button className=" btn-checkout" onClick={checkBtn}>Checkout</button>
		</div>

		<Footer/>
		</>
	)
}

