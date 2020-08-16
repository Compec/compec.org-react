import React from 'react'
import {Link} from 'react-router-dom'

function BlogKart(props) {
	return (
		<div class="card mb-4 shadow">
			{props.img && <img class="card-img-top" src={props.img} alt="Card cap" />}
			<div class="card-body">
				<h2 class="card-title">{props.title}</h2>
				<p class="card-text">{props.description}</p>
				<Link to={"/blog/"+ props.route}>
					<button class="btn btn-primary">Devamını oku →</button>
				</Link>
			</div>
			<div class="card-footer text-muted">
				{props.date} | {props.author}
			</div>
		</div>
	)
}

export default BlogKart