import React, {useState} from 'react';
import './login.css'
import { UseAuth } from './authcontext';
import { useHistory, Link} from 'react-router-dom';
import { Helmet } from "react-helmet";

function PasswordReset() {

	const { login, passwordReset } = UseAuth();
    const [success, setSuccess] = useState();
	const [msg, setMsg] = useState("");
	const [hideButton, setHideButton] = useState();
    const [alertVisibility, setAlertVisibility] = useState();
	const history = useHistory();

    async function handleSubmit(e) {
		e.preventDefault();
		const bounEmail = document.querySelector("#bounEmail").value.trim().replace(/&nbsp;/g, '');
		setHideButton(true);

        await passwordReset(bounEmail)
        .then(() => {
            setAlertVisibility(true);
			setSuccess(true);
			setMsg("Şifre sıfırlama mailiniz başarıyla yollandı!");
			setHideButton(false);
        })
        .catch(err => {
            setAlertVisibility(true);
			setSuccess(false);
			setMsg("Şifre sıfırlama mailiniz yollanırken bir sorun oluştu.");
			setHideButton(false);
        })

	// 	await login(bounEmail, password)
	// 	.then(() => {
	// 		// let isVerified = userCredential.user.emailVerified;
	// 		// let userUID = userCredential.user.uid;
	// 		// axios({
	// 		// 	method: 'post',
	// 		// 	url: process.env.REACT_APP_BACKEND_PAYMENT_CONTROL_URL,
	// 		// 	data: {
	// 		// 	  memberuid: userUID
	// 		// 	}
	// 		// })
	// 		// .then(res => 
	// 		// 	res.data
	// 		// )
	// 		// .catch()
	// 		history.push(/*"/member/home"*/ "/member/profile"); // buraya bak
	// 	})
	// 	.catch((e) => {
	// 		setAlertVisibility(true);
	// 		setSuccess(false);
	// 		setMsg("Giriş yapılırken bir sorun yaşandı. Lütfen tekrar deneyin. Çözülmezse bize ulaşın. Sorun:" + e);
	// 		setHideButton(false);
	// 	})
	}

	return (
		<div class="login-page text-center">
			<Helmet>
				<title>Şifremi Unuttum - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemi şifrenizi sıfırlayın."/>
			</Helmet>
			<form class="form-signin" onSubmit={handleSubmit}>
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />

				<h1 class="h3 mb-3 font-weight-normal">Compec Üye Sistemi Şifrenizi Sıfırlayın</h1>

				{alertVisibility && <div className={success ? "alert alert-success" : "alert alert-danger"}>{msg}</div>}

				<label for="bounEmail" class="sr-only">Boğaziçi Mail Adresiniz</label>
				<input type="email" id="bounEmail" name="bounEmail" class="form-control" placeholder="Boğaziçi Mail Adresiniz" required="true" autofocus="" pattern="[a-z0-9]+(\.)+[a-z0-9]+@boun.edu.tr"/><br/>

				<button class="btn btn-lg btn-primary btn-block" type="submit" disabled={hideButton}>Şifrenizi Sıfırlayın</button>
				
			</form>
		</div>
	);
}

export default PasswordReset;