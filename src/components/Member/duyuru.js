import React from "react";

function Duyuru({ title, link, desc}){
	return(
		<div className="duyuru">
			<h3>{title}</h3><hr/>
			<p>
				{desc}
			</p>
			{link && (
			<a class="btn btn-primary" href={link} role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a>
			)}

		</div>
	)
}

export default Duyuru;