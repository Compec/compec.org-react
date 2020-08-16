import React from 'react';
import './events.css'

function Playit() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_playit.jpg" alt="PlayIT" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>PlayIT.</h1><hr />
					<p>
					Oyun geliştirenleri ve oyun geliştirme tutkunlarını bir araya getirme amacıyla oluşturulan PlayIT, son zamanların sevilen oyunlarının arkasındaki oyun şirketlerine, oyunlarla vakit geçirip gelişim sürecini merak edenlere ve oyun geliştiricilerine ev sahipliği yapıyor. 
  Etkinlik boyunca katılımcılarımız; “Oyun geliştirme süreci nasıldır?” ve “Oyunlarda yapay zeka nasıl kullanılır?” gibi birçok sorunun cevaplandığı panellere katılıp oyun şirketlerinden bilgi alıyor, düzenlenen atölyelerde oyun geliştirme sürecine bizzat tanıklık ediyor, ve etkinlik sonundaki 24 saatlik GameJam ile eşsiz bir deneyim elde ediyor.
					</p>

					<p><a class="btn btn-primary" href="https://playit.compec.org/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Playit;