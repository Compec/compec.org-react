import React from 'react';
import { Helmet } from 'react-helmet';
import './events.css'

function GameJam() {
	return (
		<div class="container">
			<Helmet>
				<title>GameJam - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="GameJam oyun geliştirme tutkunlarını ve oyun şirketlerini bir araya getirirken atölyeler ve 24 saatlik GameJam ile eşsiz bir deneyim elde ediyor."
				/>
			</Helmet>
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_gamejam.jpg" alt="PlayIT" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Boğaziçi GameJam</h1><br/>
					<p>
					Oyun geliştirenleri ve oyun geliştirme tutkunlarını bir araya getirme amacıyla oluşturulan GameJam, son zamanların sevilen oyunlarının arkasındaki oyun şirketlerine, oyunlarla vakit geçirip gelişim sürecini merak edenlere ve oyun geliştiricilerine ev sahipliği yapıyor. 
					Etkinlik boyunca katılımcılarımız; “Oyun geliştirme süreci nasıldır?” ve “Oyunlarda yapay zeka nasıl kullanılır?” gibi birçok sorunun cevaplandığı panellere katılıp oyun şirketlerinden bilgi alıyor, düzenlenen atölyelerde oyun geliştirme sürecine bizzat tanıklık ediyor, ve etkinlik sonundaki 24 saatlik GameJam ile eşsiz bir deneyim elde ediyor.
					</p>

					<p><a class="btn btn-primary" href="https://bogazicigamejam.com/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default GameJam;