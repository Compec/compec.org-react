import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import "./Home.css"
import { HomeResources } from "./HomeResources"

function HomeCarousel() {
	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex)
	}
 
	return (
		<div className="carousel">
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{
					HomeResources.Carousel.map(
						(item) => (
							<Carousel.Item>
								<img className="d-block w-100" src= {item.src} alt= {item.alt} />
								<Carousel.Caption>
									<h3>{item.captionH3}</h3>
									<p>{item.captionP}</p>
								</Carousel.Caption>
							</Carousel.Item>
						)
					)
				}
			</Carousel>
		</div>
	)
}

export default HomeCarousel