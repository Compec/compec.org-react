import React, { useState, useEffect } from "react";
import ImgThumbnail from "./imgThumbnail";
const contentful = require("contentful");

function Galeri() {
	const client = contentful.createClient({
		space: "pfpwc05vxh8u",
		accessToken: "WeygON6Z-mco0Q-A-smOEHfbn3Stq7bqwMTSSFyYpCE",
	});

	const [galeriItems, setGaleriItems] = useState([]);

	useEffect(() => {
		console.log("effect");

		client
			.getEntries({
				content_type: "gallery",
			})

			.then((response) => {
				console.log("promise fulfilled");
				console.log(response.items[0].fields.list);
				setGaleriItems(response.items[0].fields.list);
			});
	}, []);

	console.log("render", galeriItems.length, "notes");
	console.log(galeriItems);

	return (
		<div class="container">
			<h1 class="text-center text-lg-left mt-4 mb-0">Fotoğraflarda Compec</h1>

			<hr class="mt-2 mb-5" />

			<div class="row text-center text-lg-left">
				{galeriItems.map((item) => (
					<ImgThumbnail
						src={item.fields.thumbnail.fields.file.url}
						link={item.fields.image.fields.file.url}
					/>
				))}
			</div>
		</div>
	);
}

export default Galeri;
