import React from 'react';
import { UseAuth } from './authcontext';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

function UnfReg() {
    const { currentUser, userData, logout } = UseAuth();
    const history = useHistory()
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
                <title>Kaydınız Yarım Kalmış - Boğaziçi Üniversitesi Bilişim Kulübü</title>
                <meta 
                    name="description"
                    content="Boğaziçi Üniversitesi Bilişim Kulübü'ne kayıt adımlarınız yarım kalmış." 
                />
            </Helmet>
            <h1>Compec'e kaydınız yarım kalmış, lütfen kaydınızı tamamlayın.</h1>
            <div className="btn btn-primary" onClick={logoutHandler}>
				Çıkış Yap
			</div>
        </div>
    )
}

export default UnfReg;