import React, {useState, useEffect} from 'react';
import ImgThumbnail from './imgThumbnail'
import axios from 'axios'
// import { GaleriItems } from './galeri_items' 

function Galeri() {

	const [galeriItems,setGaleriItems] = useState([]);

	useEffect(() => {
		console.log("effect");
		
		axios.get("https://lciepy4cof.execute-api.us-east-1.amazonaws.com/gallery")
		
		.then((response) => {
			console.log("promise fulfilled");
			setGaleriItems(response.data[0].fields.list);
		});
	}, []);

	console.log("render", galeriItems.length, "notes");
	console.log(galeriItems)
	


	return (
		<div class="container">

			<h1 class="text-center text-lg-left mt-4 mb-0">Fotoğraflarda Compec</h1>

			<hr class="mt-2 mb-5" />

			<div class="row text-center text-lg-left">

				{
					galeriItems.map(
						(item) => <ImgThumbnail src={item.fields.image.fields.file.url} link={item.fields.thumbnail.fields.file.url} />
					)		
				}

			</div>
		</div>
	);
}

export default Galeri;