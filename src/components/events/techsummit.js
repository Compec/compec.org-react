import React from 'react';
import './events.css'

function Techsummit() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz-techsummit.jpg" alt="Boğaziçi TechSummit" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Boğaziçi TechSummit.</h1><hr />
					<p>
					2010 yılında EXIT (Expo IT) Bilişim Fuarı ismiyle düzenlenmeye başlanan, 2016 yılında ise Boğaziçi TechSummit ismini alan 
					Boğaziçi Üniversitesi Teknoloji Zirvesi, Her yıl Türkiye'nin dört bir yanından teknolojiye ve bilişime meraklı öğrencileri, 
					halihazırda sektörde çalışan profesyonelleri ve teknoloji severleri ağırlamaktadır.
					Etkinliğin organizasyonu her yıl Boğaziçi Üniversitesi Bilişim Kulübü bünyesinde kurulan, 
					tamamen öğrencilerden oluşan bir ekip tarafından yürütülür. Türkiye'de öğrenci kulüpleri bazında, 
					teknoloji alanında düzenlenen en kapsamlı etkinlik olma özelliğini taşıyan Boğaziçi TechSummit'in içeriği; 
					paneller, konuşmalar, workshoplar, şirket gezileri ve son teknoloji ürünleri içeren deneyim alanından oluşmaktadır.
					#YenidenTanış mottosuyla gerçekleştirilen zirve, katılımcılara sıradan bir zirveden birçok yönüyle ayrılan özgün bir etkinlik sunmayı hedefler.
					</p>
					<p><a class="btn btn-primary" href="https://bountechsummit.com" target="_blank" rel="noopener noreferrer" role="button">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Techsummit;