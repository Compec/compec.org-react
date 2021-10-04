import React from 'react';
import { Helmet } from "react-helmet";

function NoRegister() {

	return (
		<div class="login-page text-center">
			<Helmet>
				<title>Kaydol - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemine kaydol." />
			</Helmet>
			<form class="form-signin" id="registrationForm">
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />
				<h1 class="h3 mb-3 font-weight-normal">Compec'e kaydolun!</h1>

				<p>
					Gelecek oryantasyonda görüşmek üzere! <br/>
				</p>
				
			</form>
		</div>
	);
}

export default NoRegister;