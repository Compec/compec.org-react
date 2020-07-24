import React from 'react';
import './events.css'

function Techsummit(){
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
                    <h1>Boğaziçi TechSummit</h1><hr/>
                    <p>2010 yılında EXIT (Expo IT) Bilişim Fuarı ismiyle düzenlenmeye başlanır. 2016 yılından itibaren ise Boğaziçi TechSummit ismiyle düzenlenir. Her yıl Türkiye'nin her tarafından teknolojiye meraklı ve bilişim alanında hedefleri olan öğrencileri ağırlayan Boğaziçi TechSummit geçtiğimiz yıl 10. defa düzenlenmiştir.

                    Etkinliğin organizasyonu her yıl Boğaziçi Üniversitesi Bilişim Kulübü bünyesinde kurulan, tamamen öğrencilerden oluşan bir ekip tarafından yürütülür.

                    Öğrenci kulüpleri bazında bilişim alanında düzenlenen en kapsamlı etkinlik olma özelliğini taşıyan Boğaziçi TechSummit, içerisinde panelleri, konuşmaları, fuaye alanında teknoloji deneyim stantlarını ve şirket gezilerini bulundurur. Etkinliğin amaçları ve içeriğiyle uyumlu olarak etkinliğin mottosu Teknolojiyle #YenidenTanış olarak belirlenmiştir.

                    Boğaziçi TechSummit projesinin amaçları şöyle sıralanabilir:
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

export default Techsummit;