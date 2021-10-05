import React, {useState} from 'react';
import './login.css'
import {UseAuth} from './authcontext';
import { useHistory, Link} from 'react-router-dom';
import { Helmet } from "react-helmet";

function Login() {

	const {login} = UseAuth();
	const [success, setSuccess] = useState();
	const [msg, setMsg] = useState("");
	const [hideButton, setHideButton] = useState();
	const [alertVisibility, setAlertVisibility] = useState();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		const bounEmail = document.querySelector("#bounEmail").value.trim().replace(/&nbsp;/g, '');
		const password = document.querySelector("#password").value.trim().replace(/&nbsp;/g, '');
		setHideButton(true);

		// try {
		// 	await login(bounEmail, password);
		// 	// redirect
		// } catch {
		// 	setAlertVisibility(true);
		// 	setSuccess(false);
		// 	setMsg("Giriş yapılırken bir sorun yaşandı. Lütfen tekrar deneyin. Çözülmezse bize ulaşın. Sorun:", e);
		// 	setHideButton(false);
		// }

		await login(bounEmail, password)
		.then(() => {
			// let isVerified = userCredential.user.emailVerified;
			// let userUID = userCredential.user.uid;
			// axios({
			// 	method: 'post',
			// 	url: process.env.REACT_APP_BACKEND_PAYMENT_CONTROL_URL,
			// 	data: {
			// 	  memberuid: userUID
			// 	}
			// })
			// .then(res => 
			// 	res.data
			// )
			// .catch()
			history.push(/*"/member/home"*/ "/member/profile"); // buraya bak
		})
		.catch((e) => {
			setAlertVisibility(true);
			setSuccess(false);
			setMsg("Giriş yapılırken bir sorun yaşandı. Lütfen tekrar deneyin. Çözülmezse bize ulaşın. Sorun:" + e);
			setHideButton(false);
		})
	}

	return (
		<div class="login-page text-center">
			<Helmet>
				<title>Giriş Yap - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemine giriş yap." />
			</Helmet>
			<form class="form-signin" onSubmit={handleSubmit}>
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />

				<h1 class="h3 mb-3 font-weight-normal">Compec Üye Sistemine Giriş Yap</h1>
				{/* <p>
					Compec'e üye olmak için önce <Link to="/member/register">Kaydol</Link> sayfasına, sonra <Link to="/member/signup">Doğrulama</Link> sayfasına gidiniz.
				</p> */}
				<p>
					Compec'e üye olmak için lütfen
				</p>
					<h3><Link to="/member/register">KAYDOL</Link></h3>
				<p>
					sayfasına gidiniz.
				</p>
				{alertVisibility && <div className={success ? "alert alert-success" : "alert alert-danger"}>{msg}</div>}

				<label for="bounEmail" class="sr-only">Boğaziçi Mail Adresiniz</label>
				<input type="email" id="bounEmail" name="bounEmail" class="form-control" placeholder="Boğaziçi Mail Adresiniz" required="true" autofocus="" pattern="[a-z0-9]+(\.)+[a-z0-9]+@boun.edu.tr"/><br/>

				<label for="password" class="sr-only">Password</label>
				<input type="password" id="password" name = "password "class="form-control" placeholder="Şifreniz" required="true" />

				{/* <div class="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div> */}

				<button class="btn btn-lg btn-primary btn-block" type="submit" disabled={hideButton}>Giriş Yap</button>
				<br/>
				<p>
					Şifrenizi unuttuysanız <Link to="/member/passwordreset">buraya</Link> tıklayınız.
				</p>
				
			</form>
		</div>
	);
}

export default Login;