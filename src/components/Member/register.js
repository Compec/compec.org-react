import React, {useState, useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";

function Register() {

	const recaptchaRef = React.createRef();
	const [captcha, setCaptcha] = useState("");
	const [success, setSuccess] = useState();
	const [msg, setMsg] = useState("");
	const [hideButton, setHideButton] = useState();
	const [alertVisibility, setAlertVisibility] = useState();

	const captchaFunc = (value) => {
		setCaptcha(value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		const name = document.querySelector("#name").value.trim().replace(/&nbsp;/g, '');
		const surname = document.querySelector("#surname").value.trim().replace(/&nbsp;/g, '');
		const bolum = document.querySelector("#bolum").value;
		const sinif = document.querySelector("#sinif").value;
		const bounEmail = document.querySelector("#bounEmail").value.trim().replace(/&nbsp;/g, '');
		const personalEmail = document.querySelector("#personalEmail").value.trim().replace(/&nbsp;/g, '');
		const telephone = document.querySelector("#telephone").value.trim().replace(/&nbsp;/g, '');
		const recaptchaAlt = document.querySelector("#g-recaptcha-response").value;
		setHideButton(true);
		axios({
			method: 'post',
			url: process.env.REACT_APP_BACKEND_SUBMIT_URL,
			data: {
				name: name,
				surname: surname,
				bolum: bolum,
				sinif: sinif,
				bounEmail: bounEmail,
				personalEmail: personalEmail,
				telephone: telephone,
				captcha: recaptchaAlt
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
			document.getElementById("alert").scrollIntoView({behavior: "smooth"});
		})
		.catch(e => {
			setAlertVisibility(true);
			setSuccess(false);
			setMsg("Sunucuya bağlanırken bir sorun yaşandı. Lütfen bize ulaşıp tekrar deneyin. Sorun:", e);
			setHideButton(false);
			document.getElementById("alert").scrollIntoView({behavior: "smooth"});
		});
	}
	return (
		<div class="login-page text-center">
			<Helmet>
				<title>Kaydol - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemine kaydol." />
			</Helmet>
			<form class="form-signin" onSubmit={onSubmit} id="registrationForm">
				<img class="mb-4" src="/compec_mavi.svg" alt="" width="250" height="150" />
				<h1 class="h3 mb-3 font-weight-normal">Compec'e kaydolun!</h1>

				<p>
					Lütfen aşağıdaki bilgileri eksiksiz ve doğruluğundan emin olarak doldurun.<br/>
					Formu birden çok kez doldurmayınız.<br/>
				</p>
				
				<label for="name" class="sr-only">İsminiz</label>
				<input type="text" id="name" name="name" class="form-control" placeholder="İsminiz" required="true" autofocus="" /><br/>

				<label for="surname" class="sr-only">Soyisminiz</label>
				<input type="text" id="surname" name="surname" class="form-control" placeholder="Soyisminiz" required="true" autofocus="" /><br/>

				<label for="bolum" class="sr-only">Bölüm</label>
				<p class="form-control">Bölümünüz</p>
				<select id="bolum" name="bolum" class="form-control" required>
					<option disabled selected value>Seçiniz...</option>
					<option value="Bilgisayar Mühendisliği">Bilgisayar Mühendisliği</option>
					<option value="Bilgisayar ve Öğretim Teknolojileri Öğretmenliği">Bilgisayar ve Öğretim Teknolojileri Öğretmenliği</option>
					<option value="Çeviribilim">Çeviribilim</option>
					<option value="Dilbilim">Dilbilim</option>
					<option value="Elektrik-Elektronik Mühendisliği">Elektrik-Elektronik Mühendisliği</option>
					<option value="Endüstri Mühendisliği">Endüstri Mühendisliği</option>
					<option value="Felsefe">Felsefe</option>
					<option value="Fen Bilgisi Öğretmenliği">Fen Bilgisi Öğretmenliği</option>
					<option value="Fizik">Fizik</option>
					<option value="Fizik Öğretmenliği">Fizik Öğretmenliği</option>
					<option value="İktisat">İktisat</option>
					<option value="İlköğretim Matematik Öğretmenliği">İlköğretim Matematik Öğretmenliği</option>
					<option value="İngiliz Dili ve Edebiyatı">İngiliz Dili ve Edebiyatı</option>
					<option value="İngilizce Öğretmenliği">İngilizce Öğretmenliği</option>
					<option value="İnşaat Mühendisliği">İnşaat Mühendisliği</option>
					<option value="İşletme">İşletme</option>
					<option value="Kimya">Kimya</option>
					<option value="Kimya Mühendisliği">Kimya Mühendisliği</option>
					<option value="Kimya Öğretmenliği">Kimya Öğretmenliği</option>
					<option value="Makine Mühendisliği">Makine Mühendisliği</option>
					<option value="Matematik">Matematik</option>
					<option value="Matematik Öğretmenliği">Matematik Öğretmenliği</option>
					<option value="Moleküler Biyoloji ve Genetik">Moleküler Biyoloji ve Genetik</option>
					<option value="Okul Öncesi Öğretmenliği">Okul Öncesi Öğretmenliği</option>
					<option value="Psikoloji">Psikoloji</option>
					<option value="Rehberlik ve Psikolojik Danışmanlık">Rehberlik ve Psikolojik Danışmanlık</option>
					<option value="Siyaset Bilimi ve Uluslararası İlişkiler">Siyaset Bilimi ve Uluslararası İlişkiler</option>
					<option value="Sosyoloji">Sosyoloji</option>
					<option value="Tarih">Tarih</option>
					<option value="Turizm İşletmeciliği">Turizm İşletmeciliği</option>
					<option value="Türk Dili ve Edebiyatı">Türk Dili ve Edebiyatı</option>
					<option value="Uluslararası Ticaret">Uluslararası Ticaret</option>
					<option value="Yönetim Bilişim Sistemleri">Yönetim Bilişim Sistemleri</option>
					<option value="Diğer">Diğer</option>
				</select><br/>

				<label for="sinif" class="sr-only">Sınıf</label>
				<p class="form-control">Sınıfınız</p>
				<select id="sinif" name="sinif" class="form-control">
					<option disabled selected value>Seçiniz...</option>
					<option value="Hazırlık">Hazırlık</option>
					<option value="Remedial">Remedial</option>
					<option value="1. Sınıf">1. Sınıf</option>
					<option value="2. Sınıf">2. Sınıf</option>
					<option value="3. Sınıf">3. Sınıf</option>
					<option value="4. Sınıf">4. Sınıf</option>
					<option value="Yüksek Lisans">Yüksek Lisans</option>
					<option value="Doktora">Doktora</option>
					<option value="Diğer">Diğer</option>
				</select><br/>

				<label for="bounEmail" class="sr-only">Boğaziçi Mail Adresiniz</label>
				<input type="email" id="bounEmail" name="bounEmail" class="form-control" placeholder="Boğaziçi (Roundcube) Mail Adresiniz" required="true" autofocus="" pattern="[a-z0-9]+(\.)+[a-z0-9]+@boun.edu.tr"/><br/>
				
				<label for="personalEmail" class="sr-only">Kişisel Mail Adresiniz</label>
				<input type="email" id="personalEmail" name="personalEmail" class="form-control" placeholder="Kişisel Mail Adresiniz" required="true" autofocus="" /><br/>

				<p>
					Telefon numaranızı başında 0 olmadan, rakamların arasında boşluk olmayacak şekilde yazınız. Örnek: 5431236789
				</p>

				<label for="telephone" class="sr-only">Telefon Numaranız</label>
				<input type="tel" id="telephone" name="telephone" class="form-control" placeholder="Telefon Numaranız" required="true" autofocus="" pattern="5[0-9]{9}"/><br/>

				<ReCAPTCHA ref={recaptchaRef} sitekey="6LeHPtQZAAAAAIMIQUeifB4lUgiovjaXsTBGFmzx" onChange={captchaFunc}/><br/>

				<button class="btn btn-lg btn-primary btn-block" type="submit" disabled={hideButton}>Kaydol</button>

				{alertVisibility && <div id="alert" className={success ? "alert alert-success" : "alert alert-danger"}>{msg}</div>}
				<p>
					<b>Doldurduktan sonra Boğaziçi (Roundcube) mail kutunuzu kontrol ediniz.</b><br/>
					Formu doldurduktan sonra kaydınızı doğrulamanız için <Link to="/member/signup">Doğrulama</Link> sayfasına gidiniz.
				</p>
			</form>
		</div>
	);
}

export default Register;