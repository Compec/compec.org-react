import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Galeri from "./components/Galeri/Galeri"
import BBO from "./components/events/bbo"
import Datacamp from "./components/events/datacamp"
import Efounder from "./components/events/efounder"
import Hackathon from "./components/events/hackathon"
import GameJam from "./components/events/gamejam"
import Techsummit from "./components/events/techsummit"
import Teknodolu from "./components/events/teknodolu"
import Blog from "./components/Blog/blog"
import Iletisim from "./components/Iletisim/iletisim"
import Login from "./components/Member/login"
import Hakkimizda from "./components/biz_kimiz/hakkimizda"
import Yonetim from "./components/biz_kimiz/yonetim"
import Altkurullar from "./components/biz_kimiz/altkurullar"
import BlogPage from "./components/Blog/blog_page"
import Register from "./components/Member/register"
import SignUp from "./components/Member/signup"
import Profile from "./components/Member/profile"
import MemberHome from "./components/Member/memberhome";
import AltKurulAnket from "./components/Member/altkurul"
import { AuthProvider } from "./components/Member/authcontext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import NoRegister from "./components/Member/noregister";
import UnfRegRoute from "./components/UnfRegRoute";
import UnpaidRoute from "./components/UnpaidRoute";
import UnverifiedEmailRoute from "./components/UnverifiedEmailRoute";
import UnfReg from "./components/Member/unfreg";
import UnpaidReg from "./components/Member/unpaidreg";
import UnverifiedEmailReg from "./components/Member/unverifiedemailreg";
import YonetimRoute from "./components/YonetimRoute";
import NotFound from "./components/NotFound";
import QRValidation from "./components/Member/qrreader";
import KVKK from "./components/kvkk/kvkk";
import PasswordReset from "./components/Member/passwordreset";

function App() {
	return (
		<AuthProvider>
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
								<Route path="/gamejam" component={GameJam}/>
								<Route path="/techsummit" component={Techsummit}/>
								<Route path="/teknodolu" component={Teknodolu}/>
								<Route path="/iletisim" component={Iletisim}/>
								<Route path="/hakkimizda" exact component={Hakkimizda}/>
								<Route path="/yonetim" component={Yonetim}/>
								<Route path="/altkurullar" component={Altkurullar}/>
								<Route path="/blog/:route" render={props => <BlogPage {...props}/> } />
								<Route path="/blog" exact component={Blog}/>
                                <Route path="/kvkk" exact component={KVKK}/>
								<PublicRoute path="/member/login" component={Login}/>
								<PublicRoute path="/member/register" exact component={Register}/>
								{/* <PublicRoute path="/member/signup" exact component={SignUp}/>
								<PrivateRoute path="/member/home" exact component={MemberHome} /> */}
								<PrivateRoute path="/member/profile" exact component={Profile} />
								<UnfRegRoute path="/member/unfreg" exact component={UnfReg} />
								{/* <PrivateRoute path="/member/altkurul" exact component={AltKurulAnket} /> */}
								<YonetimRoute path="/member/qr" exact component={QRValidation}/>
								<UnpaidRoute path="/member/unpaidreg" exact component={UnpaidReg}/>
								<UnverifiedEmailRoute path="/member/unverifiedemailreg" exact component={UnverifiedEmailReg}/>
								<Route path="/member/passwordreset" exact component={PasswordReset} />
								<Route component={NotFound}/>
							</Switch>
					</div>
					<Footer/>
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
