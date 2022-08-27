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
					Boğaziçi Game Jam, katılımcıların 48 saat boyunca verilen bir tema üzerine kendi oyunlarını yaptıkları fiziksel bir oyun geliştirme hackathon’udur. Süreç içerisinde katılımcılar yeni ekip arkadaşları ile tanışabilir ve yeni teknikler öğrenebilirler. 48 saatin sonunda geliştirilen oyunlar ses, tasarım, senaryo,  orijinallik gibi kategorilerde değerlendirilir. Katılımcılar için yarışma en iyi oyun yapmaktan ziyade network ve yeteneklerini test etmek amaçlıdır. Bundan dolayı ortamda tatlı bir rekabetin yanında samimiyet duygusu hakimdir . Bu ortam sayesinde Boğaziçi Game Jam, katılımcılara ilham veren, takım çalışmasını öğreten, duygusal yönden destekleyen ve dayanışma gücünü pekiştiren bir etkinlik haline gelir.  Compec olarak bizde bu genelekselleşmiş etkinliği düzenlemekte olup ek olarak katılımcılara network olanağı ve bilgi içeren paneller sağlamaktadır.
					</p>

					<p><a class="btn btn-primary" href="https://bogazicigamejam.com/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default GameJam;