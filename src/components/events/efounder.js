import React from 'react';
import './events.css'

function Efounder() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_efounder.jpg" alt="E-Founder" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>E-Founder.</h1><hr />
					<p>
						e-Founder, internet ile iç içe yaşayan ve girişimcilik konusunda hevesli olan öğrencilere dijital bir girişim yaratma konusunda
						ilham vermeyi hedefleyen Zirve ve Yarışma'dan oluşan bir girişimcilik serüvenidir. e-Founder Dijital Girişimcilik Zirvesi'nde paneller,
						seminerler, startup standları, workshoplar ve interaktif oyunlar yer alıyor. e-Founder Dijital Girişimcilik Yarışması'nda ise finale kalan
						girişimciler jürinin karşısında yılın e-Founder'u olmak için kıyasıya yarışıyor.
					</p>
					<p><a class="btn btn-primary" href="https://efounder.org/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Efounder;