import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeAbout from './HomeAbout'
import { Helmet } from "react-helmet"

function Home() {
	return (
		<div>
			<Helmet>
				<title>Ana Sayfa - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü, üyelerini yazılım, tasarım ve girişimcilik alanında geliştirirken, teknolojiye ve bilişime yön verecek işlere imza atıyor." />
			</Helmet>
			<HomeCarousel />
			<HomeAbout />
		</div>
	)
}

export default Home;