import React from 'react';
import ImgThumbnail from './imgThumbnail'
import { GaleriItems } from './galeri_items'

function Galeri() {
	return (
		<div class="container">

			<h1 class="text-center text-lg-left mt-4 mb-0">Fotoğraflarda Compec</h1>

			<hr class="mt-2 mb-5" />

			<div class="row text-center text-lg-left">
				{
					GaleriItems.List.map(
						(thumbnail) => <ImgThumbnail src={thumbnail.src} link={thumbnail.link} />
					)
				}
			</div>
		</div>
	);
}

export default Galeri;