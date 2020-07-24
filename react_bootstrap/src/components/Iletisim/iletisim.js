import React from 'react';

function Iletisim(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <br/>
                    <h1>İletişim</h1>
                    <h4>Bize sağ altta bulunan <a href="https://tawk.to">tawk.to</a> eklentisi ile canlı olarak, veya aşağıdaki iletişim bilgilerimizle ulaşabilirsiniz. </h4>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bebek,%20Bo%C4%9Fazi%C3%A7i%20%C3%9Cniversitesi%20G%C3%BCney%20Kamp%C3%BCs%C3%BC%201,%20Erkek%20Yurdu,%20COMPEC%20Kul%C3%BCp%20Odas%C4%B1%20No%201,%2034470%20Be%C5%9Fikta%C5%9F/%C4%B0stanbul,%20Turkey+(Compec)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="container">
                        <b>Compec</b><br/>
                        Boğaziçi Üniversitesi Bilişim Kulübü<br/>
                        Bebek, Boğaziçi Üniversitesi Güney Kampüsü 1. Erkek Yurdu,
                        Compec Kulüp Odası No: 1 34342 Beşiktaş/İstanbul<br/>
                        Phone: +1 145 000 101<br />
                        <a href="mailto:compec@boun.edu.tr">compec@boun.edu.tr</a><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iletisim;