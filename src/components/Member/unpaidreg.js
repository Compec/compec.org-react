import React, { useEffect, useState } from 'react';
import { UseAuth } from './authcontext';
import { Helmet } from 'react-helmet';
import QRCode from 'qrcode';
import { useHistory } from 'react-router-dom';

function UnpaidReg() {
    const { logout, currentUser } = UseAuth();
    const [imageUrl, setImageUrl] = useState('');
    const history = useHistory();
    // const generateQrCode = async (text) => {
    //     try {
    //           const response = await QRCode.toDataURL(text);
    //           setImageUrl(response);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }

    useEffect(() => {
        //generateQrCode(currentUser.uid);
        (async () => {
            try {
                const response = await QRCode.toDataURL("https://compec.org/user/" + currentUser.uid);

                setImageUrl(response);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    function logoutHandler() {
        logout()
            .then(() => {
                history.push("/member/login");
            })
            .catch((e) => {
                alert("Çıkış yapılamadı lütfen tekrar deneyin! Sorun: " + e);
            });
    }

    return (
        <div className="container">
            <Helmet>
                <title>QR Kod Doğrulama - Boğaziçi Üniversitesi Bilişim Kulübü</title>
                <meta
                    name="description"
                    content="Boğaziçi Üniversitesi Bilişim Kulübü'ne kayıt adımlarınız yarım kalmış."
                />
            </Helmet>
            <h1>Compec'e kaydınız henüz tamamlanmamıştır.</h1>
            <h3>Kulüp harcınızı ödedikten sonra aşağıdaki QR kodunuzu yönetim ekibinden bir görevliye gösteriniz.</h3>
            
            <h4>
                <span style={{color:"red", fontWeight:"bold"}}>Eğer online kayıt olmak istiyorsanız</span> 40 TL olan harcınızı aşağıdaki <span style={{color:'red', fontWeight:'bold'}}>IBAN adresine, açıklama kısmına BOUN uzantılı mail adresinizi</span> yazarak gönderiniz.<br/><br/>
                TR41 0011 1000 0000 0111 0859 16<br/>
                Fatmanur Yaman
            </h4>
            <br/>
            <h5>Kaydınızı tamamlamak için tekrar form doldurmanıza gerek yoktur.</h5>
            {imageUrl ? (
                <a href={imageUrl} download>
                    <img src={imageUrl} alt="img" />
                </a>) : null}
            <div className="btn btn-primary" onClick={logoutHandler}>
                Çıkış Yap
            </div>
        </div>
    )
}

export default UnpaidReg;