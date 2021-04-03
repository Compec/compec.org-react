import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogKart from "./blog_kart";
const contentful = require("contentful");

function Blog() {
	const [blogItems, setBlogItems] = useState([]);

	const client = contentful.createClient({
		space: "pfpwc05vxh8u",
		accessToken: "WeygON6Z-mco0Q-A-smOEHfbn3Stq7bqwMTSSFyYpCE",
	});

	useEffect(() => {
		client
			.getEntries({
				content_type: "blog",
				order: '-fields.id'
			})
			.then((response) => {
				setBlogItems(response.items);
			});
	}, []);

	return (
		<div>
			<Helmet>
				<title>Blog - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="Boğaziçi Üniversitesi Bilişim Kulübü'nün üyelerinin kaleminden dolu dolu içerikler."
				/>
			</Helmet>
			<div class="container">
				<div class="row">
					<div className="col">
						<h1>Compec Blog</h1> <br/>
					</div>
				</div>
				<div className="row">
					{" "}
					{/*col-md-8*/}
					{blogItems.map((blogItem, i) => {
						return (
							<div className="col-md-6">
								<BlogKart
								title={blogItem.fields.title}
								author={blogItem.fields.author}
								date={blogItem.fields.date}
								description={blogItem.fields.description}
								img={blogItem.fields.image.fields.file.url}
								route={blogItem.fields.route}
								/>
							</div>
						);
					})}
					{/* 
					<ul class="pagination justify-content-center mb-4">
						<li class="page-item">
							<a class="page-link" href="https://startbootstrap.github.io/startbootstrap-blog-home/#">← Older</a>
						</li>
						<li class="page-item disabled">
							<a class="page-link" href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Newer →</a>
						</li>
					</ul>
					*/}
				</div>
				{/* 
				<div class="col-md-4">

					<div class="card my-4">
						<h5 class="card-header">Search</h5>
						<div class="card-body">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Search for..." />
								<span class="input-group-append">
									<button class="btn btn-secondary" type="button">Go!</button>
								</span>
							</div>
						</div>
					</div>

					<div class="card my-4">
						<h5 class="card-header">Categories</h5>
						<div class="card-body">
							<div class="row">
								<div class="col-lg-6">
									<ul class="list-unstyled mb-0">
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Web Design</a>
										</li>
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">HTML</a>
										</li>
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Freebies</a>
										</li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="list-unstyled mb-0">
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">JavaScript</a>
										</li>
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">CSS</a>
										</li>
										<li>
											<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Tutorials</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>


					<div class="card my-4">
						<h5 class="card-header">Side Widget</h5>
						<div class="card-body">
							You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
						</div>
					</div>
				</div>
				*/}
			</div>
		</div>
	);
}

export default Blog;
