import React from 'react'

function ImgThumb({ src, link }) {
	return (
		<div class="col-lg-3 col-md-4 col-6">
			<a href={link} target="_blank" class="d-block mb-4 h-100">
				<img class="img-fluid img-thumbnail shadow" src={src} alt="" />
			</a>
		</div>
	)
}

export default ImgThumb