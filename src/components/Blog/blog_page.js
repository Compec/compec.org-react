import React from "react"
import Markdown from "react-markdown"
import data from "./posts.json"
import "./blog.css"
import { Card, Button } from "react-bootstrap"
import moment from "moment"
import "moment/locale/tr"
import { FaShareAlt } from "react-icons/fa"

const readingTime = require("reading-time")
const formatReadingTime = require("reading-time-emoji")

function BlogPage(props) {
	moment.locale("tr")

	let fetchedBlog = {}
	data.forEach((dataContent, i) => {
		if (props.match.params.route === dataContent.route) {
			fetchedBlog = dataContent
			fetchedBlog.time = readingTime(dataContent.content)
		}
	})
	return (
		<div className="container">
			<Card>
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
									.catch((error) =>
										console.log("Error sharing", error)
									)
							}}
						>
							<FaShareAlt />
						</Button>
					)}
				</Card.Footer>
			</Card>
		</div>
	)
}

export default BlogPage
