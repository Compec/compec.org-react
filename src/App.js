import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Galeri from './components/Galeri/Galeri'
import BBO from './components/events/bbo'
import Datacamp from './components/events/datacamp'
import Efounder from './components/events/efounder'
import Hackathon from './components/events/hackathon'
import Playit from './components/events/playit'
import Techsummit from './components/events/techsummit'
import Teknodolu from './components/events/teknodolu'
import Blog from './components/Blog/blog'
import Iletisim from './components/Iletisim/iletisim'
import Login from './components/Login/login'
import Hakkimizda from './components/biz_kimiz/hakkimizda'
import Yonetim from './components/biz_kimiz/yonetim'
import Altkurullar from './components/biz_kimiz/altkurullar'
import YonetimKart from './components/biz_kimiz/yonetim_kart'
import { YonetimInfo } from './components/biz_kimiz/yonetim_info'
import ImgThumbnail from './components/Galeri/imgThumbnail'
import { GaleriItems } from './components/Galeri/galeri_items'

function App() {
	return (
		<BrowserRouter>
			<div className="page-container">
				<div className="content-wrap">
						<Navigation/>
						<Switch>
							<Route path="/" exact component={Home}/>
							<Route path="/galeri" component={Galeri}/>
							<Route path="/bbo" component={BBO}/>
							<Route path="/datacamp" component={Datacamp}/>
							<Route path="/efounder" component={Efounder}/>
							<Route path="/hackathon" component={Hackathon}/>
							<Route path="/playit" component={Playit}/>
							<Route path="/techsummit" component={Techsummit}/>
							<Route path="/teknodolu" component={Teknodolu}/>
							<Route path="/blog" component={Blog}/>
							<Route path="/iletisim" component={Iletisim}/>
							<Route path="/hakkimizda" component={Hakkimizda}/>
							<Route path="/yonetim" component={Yonetim}/>
							<Route path="/altkurullar" component={Altkurullar}/>
							<Route path="/login" component={Login}/>
						</Switch>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
