import React, { useState, useEffect } from "react";
import ImgThumbnail from "./imgThumbnail";
import { Helmet } from "react-helmet";
const contentful = require("contentful");

function Galeri() {
	const client = contentful.createClient({
		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
		accessToken: process.env.REACT_APP_CONTENTFUL_KEY
	});

	const [galeriItems, setGaleriItems] = useState([]);

	useEffect(() => {

		client
			.getEntries({
				content_type: "gallery",
			})

			.then((response) => {
				setGaleriItems(response.items[0].fields.list);
			});
			// eslint-disable-next-line
	}, []);

	return (
		<div class="container">
			<Helmet>
				<title>Galeri - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="Boğaziçi Üniversitesi Bilişim Kulübü'nün gerçekleştirdiği etkinliklerden güzel mi güzel fotoğraflar"
				/>
			</Helmet>
			<h1>Fotoğraflarda Compec</h1><br/>
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
