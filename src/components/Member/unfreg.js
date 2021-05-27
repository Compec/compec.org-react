import React from 'react';
import { UseAuth } from './authcontext';
import { Helmet } from 'react-helmet';

function UnfReg() {
    const { currentUser, userData } = UseAuth();
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
        </div>
    )
}

export default UnfReg;