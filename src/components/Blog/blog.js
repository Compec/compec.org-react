import React from 'react';

function Blog() {
	return (
		<div>
			<div class="container">
				<div class="row">
					<div className="col">
						<h1>Compec Blog</h1> <hr />
					</div>
				</div>
				<div className="row">
					<div class="col-md-8">
						<div class="card mb-4 shadow">
							<img class="card-img-top" src="./blog/750x300.jpg" alt="Card cap" />
							<div class="card-body">
								<h2 class="card-title">Post Title</h2>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
								<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#" class="btn btn-primary">Read More →</a>
							</div>
							<div class="card-footer text-muted">
								Posted on January 1, 2020 by<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Start Bootstrap</a>
							</div>
						</div>

						<div class="card mb-4">
							<img class="card-img-top" src="./750x300.jpg" alt="Card cap" />
							<div class="card-body">
								<h2 class="card-title">Post Title</h2>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
								<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#" class="btn btn-primary">Read More →</a>
							</div>
							<div class="card-footer text-muted">
								Posted on January 1, 2020 by<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Start Bootstrap</a>
							</div>
						</div>

						<div class="card mb-4">
							<img class="card-img-top" src="./750x300.jpg" alt="Card cap" />
							<div class="card-body">
								<h2 class="card-title">Post Title</h2>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
								<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#" class="btn btn-primary">Read More →</a>
							</div>
							<div class="card-footer text-muted">
								Posted on January 1, 2020 by<a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">Start Bootstrap</a>
							</div>
						</div>

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
				</div>
			</div>
		</div>
	);
}

export default Blog;