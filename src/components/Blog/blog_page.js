import React from 'react'
import Markdown from 'react-markdown'
import data from './posts.json'
import './blog.css'

function BlogPage(props) {
	const fetchedBlog = {}
	data.forEach((dataContent, i) => {
        if (props.match.params.route === dataContent.route) {
            fetchedBlog.content = dataContent.content
        }
    })
	return(
		<div className="container blogpage">
			<div className="card">
				<Markdown source={fetchedBlog.content} escapeHtml={false} />
			</div>
		</div>
	)
}

export default BlogPage