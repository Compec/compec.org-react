import React from 'react';
import { UseAuth } from './authcontext';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

function UnverifiedEmailReg() {
    const { logout } = UseAuth();
    const history = useHistory();
    function logoutHandler(){
		logout()
		.then(() => {
			history.push("/member/login");
		})
		.catch((e) => {
			alert("Çıkış yapılamadı lütfen tekrar deneyin! Sorun: " + e);
		});
	}
    return(
        <div className="container">
            <Helmet>
                <title>E-Mail Adresinizi Doğrulayın - Boğaziçi Üniversitesi Bilişim Kulübü</title>
                <meta 
                    name="description"
                    content="Boğaziçi Üniversitesi Bilişim Kulübü'ne kayıt adımlarınız yarım kalmış." 
                />
            </Helmet>
            <h1>Compec'e kaydınız henüz tamamlanmamıştır. <a href="https://roundcube.boun.edu.tr" target="_blank">Roundcube</a> mail kutunuzu kontrol ediniz.</h1>
            <h3>Kayıt formunu doldurduğunuzda size gelmiş olan <i>"Compec'e hoş geldin!"</i> başlıklı e-mail'de yer alan linke tıklayarak e-mail adresinizi doğrulayabilirsiniz.</h3>
            <h4>Kaydınızı tamamlamak için tekrar form doldurmanıza gerek yoktur.</h4>
            <div className="btn btn-primary" onClick={logoutHandler}>
				Çıkış Yap
			</div>
        </div>
    )
}

export default UnverifiedEmailReg;