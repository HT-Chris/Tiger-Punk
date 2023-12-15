import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"



export const Contacts = () => {

	return ( 
		<>
		<NavBar/>
		<div id="contacts-page">
			<header>
				<h1>Contact Us</h1>
			</header>
			<div id="contacts-booking">
				<h2>For Booking</h2>
				<input type="email" name="" placeholder="Book" id="contact-email-input" className="input"/>
				<button>Book Us</button>
			</div>
			<div id="contacts-newsletter">
				<h2>Join Our Newsletter!</h2>
				<input type="email" name="" placeholder="Join" id="contact-newsletter-input" className="input" />
				<button>Join</button>
			</div>
			<div id="contacts-info">
				<h2>Email: email@email.com</h2>
				<h2>Phone: (123)-456-7890</h2>
			</div>
			<div id="contacts-social">
				<div id="tiktok-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="instagram-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="facebook-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="youtube-icon" className="social-icon">
					<a href=""></a>
				</div>
			</div>
		</div>
		<Footer/>
		</>
	)
}