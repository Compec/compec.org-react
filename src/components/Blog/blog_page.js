import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import "./blog.css";
import { Card, Button, Spinner } from "react-bootstrap";
import moment from "moment";
import "moment/locale/tr";
import { FaShareAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
const contentful = require("contentful");

const readingTime = require("reading-time");
const formatReadingTime = require("reading-time-emoji");

function BlogPage(props) {
	moment.locale("tr");

	const client = contentful.createClient({
		space: "pfpwc05vxh8u",
		accessToken: "WeygON6Z-mco0Q-A-smOEHfbn3Stq7bqwMTSSFyYpCE",
	}); 

	const [fetchedBlog, setFetchedBlog] = useState(null);

	useEffect(() => {
		/*
		axios.get("https://9wcdm2ug07.execute-api.us-east-1.amazonaws.com/blog")
		
		.then((response) => {
			console.log("promise fulfilled");
			setBlogItems(response.data);
		});
		*/
		client
			.getEntries({
				content_type: "blog",
				"fields.route": props.match.params.route,
			})
			.then((response) => {
				setFetchedBlog({
					id: response.items[0].fields.id,
					title: response.items[0].fields.title,
					description: response.items[0].fields.description,
					author: response.items[0].fields.author,
					date: response.items[0].fields.date,
					content: response.items[0].fields.content,
					time: readingTime(response.items[0].fields.content),
				});
			})
			.catch(console.error);
			// eslint-disable-next-line
	}, []);

	/*blogItems.forEach((blogItem, i) => {
		if (props.match.params.route === blogItem.fields.route) {
			fetchedBlog = blogItem
			fetchedBlog.time = readingTime(blogItem.fields.content.content[0].content[0].value)
		}
	})*/

	return (
		<div className="container">
			<Card>
				{fetchedBlog ? (
					<>
						<Helmet>
						<title>{fetchedBlog.title + " - Boğaziçi Üniversitesi Bilişim Kulübü"}</title>
						<meta
							name="description"
							content={fetchedBlog.description}
						/>
						</Helmet>
						<Card.Header className="text-muted">
							Tahmini Okuma Süresi
							{formatReadingTime(fetchedBlog.time.minutes).split(" ")[0]}
							{moment.duration(fetchedBlog.time.time).humanize()}
						</Card.Header>

						<Card.Body>
							<Markdown source={fetchedBlog.content} escapeHtml={false} />
						</Card.Body>

						<Card.Footer>
							{fetchedBlog.date} | {fetchedBlog.author}
							{navigator.share && (
								<Button
									size="sm"
									variant="outline-primary"
									className="float-right"
									onClick={() => {
										navigator
											.share({
												title: fetchedBlog.title,
												text: fetchedBlog.description,
												url: window.location.href,
											})
											.then(() => console.log("Successful share"))
											.catch((error) => console.log("Error sharing", error));
									}}
								>
									<FaShareAlt />
								</Button>
							)}
						</Card.Footer>
					</>
				) : (
					<div className="text-center">
						<Spinner animation="border" variant="dark" size="lg" />
					</div>
				)}
			</Card>
		</div>
	);
}

export default BlogPage;
