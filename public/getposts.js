const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/content")
let postlist = []

const getPosts = () => {
	fs.readdir(dirPath, (err, files) => {
		files.forEach((file, i) => {
			let obj = {}
			let post
			fs.readFile(path.join(dirPath,file),"utf8", (err, contents) => {
				const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
				}
				const parseMetadata =({lines,metadataIndices}) => {
					if(metadataIndices.length > 0) {
						let metadata = lines.slice(metadataIndices[0] + 1,metadataIndices[1])
						metadata.forEach(line =>{
							obj[line.split(": ")[0]] = line.split(": ")[1]
						})
						return obj
					}
				}
				const parseContent = ({lines,metadataIndices}) =>{
					if(metadataIndices.length > 0){
						lines = lines.slice(metadataIndices[1] + 1, lines.length)
					}
					return lines.join("\n")
				}
				const lines = contents.split("\n")
				const metadataIndices = lines.reduce(getMetadataIndices, [])
				const metadata = parseMetadata({lines,metadataIndices})
				const content = parseContent({lines,metadataIndices})
				post = {
					id: parseInt(metadata.id,10),
					title: metadata.title,
					author: metadata.author,
					date: metadata.date,
					description: metadata.description,
					img: metadata.img,
					route: metadata.route,
					content: content
				}
				postlist.push(post)
				if (i === files.length - 1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
			})
		})
	})
}

getPosts()