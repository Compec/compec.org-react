import React from 'react';
const GaleriItems = {
	List: [
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		{
			src: "/galeri/ezgi_enis_t.jpg",
			link: "/galeri/ezgi_enis.jpg",
		},
		
	],
}

function ImgThumbnail({ src, link }) {
	return (
		<div class="col-lg-3 col-md-4 col-6">
			<a href={link} target="_blank" rel="noopener noreferrer" class="d-block mb-4 h-100">
				<img class="img-fluid img-thumbnail shadow" src={src} alt="" />
			</a>
		</div>
	)
}

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