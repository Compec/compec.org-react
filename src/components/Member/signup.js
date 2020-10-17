import React, {useState} from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function SignUp() {

	const [success, setSuccess] = useState();
	const [msg, setMsg] = useState("");
	const [hideButton, setHideButton] = useState();
	const [alertVisibility, setAlertVisibility] = useState();

	const onSubmit = (e) => {
		e.preventDefault();
		const confirmationCode = document.querySelector("#confirmationCode").value.trim().replace(/&nbsp;/g, '');
		const bounEmail = document.querySelector("#bounEmail").value.trim().replace(/&nbsp;/g, '');
		const password = document.querySelector("#password").value.trim().replace(/&nbsp;/g, '');
		const password2 = document.querySelector("#password2").value.trim().replace(/&nbsp;/g, '');
		setHideButton(true);

		var re = new RegExp(/^(?:(?=.*?[A-Z])(?:(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=])|(?=.*?[a-z])(?:(?=.*?[0-9])|(?=.*?[-!@#$%^&*()_[\]{},.<>+=])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=]))[A-Za-z0-9!@#$%^&*()_[\]{},.<>+=-]{6,50}/);
		if(password !== password2){
			setAlertVisibility(true);
			setSuccess(false);
			setMsg("Girdiğiniz şifreler birbirinden farklı. Lütfen tekrar deneyiniz.");
			setHideButton(false);
		} else {
			if(!re.test(password)){
				setAlertVisibility(true);
				setSuccess(false);
				setMsg("Girdiğiniz şifre şartları sağlamıyor.");
				setHideButton(false);
			} else {
				axios({
					method: 'post',
					url: process.env.REACT_APP_BACKEND_SIGNUP_URL,
					data: {
						confirmationCode: confirmationCode,
						bounEmail: bounEmail,
						password: password,
					}
				})
				.then(res => {
					setAlertVisibility(true);
					setSuccess(res.data.success);
					setMsg(res.data.msg);
					if(res.data.success){
						setHideButton(true);
					} else {
						setHideButton(false);
					}
				})
				.catch(e => {
					setAlertVisibility(true);
					setSuccess(false);
					setMsg("Sunucuya bağlanırken bir sorun yaşandı. Lütfen bize ulaşıp tekrar deneyin. Sorun:", e);
					setHideButton(false);
				});
			}
		}
	}
	return (
		<div class="login-page text-center">
			<Helmet>
				<title>Kaydını Doğrula - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemine kaydını doğrula." />
			</Helmet>
			<form class="form-signin" onSubmit={onSubmit} id="registrationForm">
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />
				<h1 class="h3 mb-3 font-weight-normal">Compec'e kaydınızı tamamlayın!</h1>

				<p>
					Lütfen aşağıdaki bilgileri eksiksiz ve doğruluğundan emin olarak doldurun.<br/>
					Formu birden çok kez doldurmayınız.<br/>
					Doğrulama kodunuz yoksa <Link to="/member/register">Kaydol</Link> sayfasına gidiniz.<br/>
					Doğrulamayı tamamlayınca <Link to="/member/login">Giriş Yap</Link> sayfasına gidebilirsiniz.<br/>
				</p>

				{alertVisibility && <div className={success ? "alert alert-success" : "alert alert-danger"}>{msg}</div>}

				<label for="confirmationCode" class="sr-only">Doğrulama Kodunuz</label>
				<input type="text" id="confirmationCode" name="confirmationCode" class="form-control" placeholder="Doğrulama Kodunuz" required="true" autofocus="" /><br/>

				<label for="bounEmail" class="sr-only">Boğaziçi Mail Adresiniz</label>
				<input type="email" id="bounEmail" name="bounEmail" class="form-control" placeholder="Boğaziçi Mail Adresiniz" required="true" autofocus="" pattern="[a-z0-9]+(\.)+[a-z0-9]+@boun.edu.tr"/><br/>
				<p>
					Şifreniz aşağıdakilerden üçünü içermelidir ve en az 6 karakter uzunluğunda olmalıdır:
					<ul className="text-left">
						<li>Küçük harf</li>
						<li>Büyük harf</li>
						<li>Rakam</li>
						<li>Sembol</li>
					</ul>
				</p>
				<label for="password" class="sr-only">Şifreniz</label>
				<input type="password" id="password" name="password" class="form-control" placeholder="Şifreniz" required="true" autofocus="" /><br/>

				<label for="password2" class="sr-only">Şifrenizi tekrar yazınız</label>
				<input type="password" id="password2" name="password2" class="form-control" placeholder="Şifrenizi tekrar yazınız" required="true" autofocus="" /><br/>

				<button class="btn btn-lg btn-primary btn-block" type="submit" disabled={hideButton}>Kaydını Doğrula</button>
			</form>
		</div>
	);
}

export default SignUp;