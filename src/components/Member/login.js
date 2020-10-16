import React, {useState} from 'react';
import './login.css'
import {UseAuth} from './authcontext';
import { useHistory, Link} from 'react-router-dom';

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
			history.push("/member/home");
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
			<form class="form-signin" onSubmit={handleSubmit}>
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />

				<h1 class="h3 mb-3 font-weight-normal">Compec Üye Sistemine Giriş Yap</h1>
				<p>
					Compec'e üye olmak için <Link to="/member/register">Kayıt Ol</Link> sayfasına ulaşabilirsiniz.
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

				<button class="btn btn-lg btn-primary btn-block" type="submit" disabled={hideButton}>Sign in</button>

				
			</form>
		</div>
	);
}

export default Login;