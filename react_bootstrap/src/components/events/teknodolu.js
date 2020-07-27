import React from 'react';

function Teknodolu(){
    return(
        <div class="container">
            <div className="eventpage-header">
                <div class="card bg-dark text-white" >
                    <img class="card-img-top" src="./BingImageOfTheDay_20200720.jpg" alt="Card image cap"/>
                    {/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>TeknoDolu</h1><hr/>
                    <p>TeknoDolu, tercihen dezavantajlı bölgelerde yaşayan çocukları güncel teknolojiyle buluşturan bir sosyal sorumluluk projesidir. 

                    Etkinlik iki gün sürmektedir ve çocukların son teknoloji ürünleri deneyimlediği TeknoPanayır, atölye çalışmaları, seminerler ve diğer eğlence aktivitelerinden oluşmaktadır.

                    2019 yılında ilk kez Bilecik/Bozüyük'te 400 öğrenci ile gerçekleştirilmiştir. 

                    Proje, başta Bozüyük basını olmak üzere birçok yayın kuruluşunun gündeminde yer bulmuştur.
                    </p>
                    
                    <ul>
                        <li>Boğaziçi Üniversitesi’nin oluşturduğu öğrenci tabanlı üretken kültür etrafında kulüp üyelerimize güncel teknolojiler, sektördeki çalışmalar, şirket iş birlikleri, marka pazarlaması ve ekip çalışması gibi konularda reel deneyimler kazandırmak</li>
                        <li>Katılımcıları ve bizi takip edenleri “teknolojiyle yeniden tanıştırmak”, günümüz teknolojileri üzerine kapsamlı ve üretken bir perspektif kazandırmak</li>
                        <li>Türkiye’de teknoloji üreten kişileri ve kurumları bir araya getirerek teknoloji üzerine bir ekosistem oluşmasına katkı sağlamak </li>

                    </ul>
                    <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.5/examples/jumbotron/#" role="button">View details »</a></p>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Teknodolu;