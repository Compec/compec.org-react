import React from "react";


function Duyuru({ title, link, desc, buttonText}){
	return(
		<div className="duyuru">
			<h3>{title}</h3><hr/>
			<p>
				{desc}
			</p>
			{link && (
			<a class="btn btn-primary" href={link} role="button" target="_blank" rel="noopener noreferrer">{buttonText}</a>
			)}

		</div>
	)
}

export default Duyuru;