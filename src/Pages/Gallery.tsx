import { GalleryFiles } from "../assets/Gallery/GalleryFiles"
import { Polaroid } from "../Components/Polaroid"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"

export const Gallery = () => {

	const style1 = {
	
		
	}
	return ( 
		<>
		<NavBar/>
		<div id="gallery-page">
			<h1 className="line-through">Gallery</h1>
			<h1>Memories</h1>
			<div id="gallery-page-container">
				{GalleryFiles.map((image) => (
					<Polaroid image={image} date={'???'} style={style1} />
					))}
			</div>
		</div>
		<Footer />
		</>
	)
}