import React from 'react';
import './events.css'

function Playit() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./BingImageOfTheDay_20200720.jpg" alt="PlayIT" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>PlayIT.</h1><hr />
					<p>Oyunseverler ve oyun dünyasını bir araya getiren PlayIT, sevilen oyunların arkasındaki şirketlere, içerik sitelerine, oyun yayıncılarına ve e-spor dünyasının tanınan isimlerine ev sahipliği yapmaktadır. Etkinlik boyunca katılımcılar, panellere katılıp bilgi almanın yanı sıra oyun sektörünün, içerik sitelerinin ve yayın dünyasının sevilen yüzleri ile bir araya gelebilmektedir.

					Geçtiğimiz yıl 200'den fazla katılımcıyla ikincisi düzenlenen PlayIT; Narcade, Noxart, Taleworlds gibi şirketlerin yanı sıra Bursaspor, Royal Youth gibi e-spor takımlarına ve Unlost, Zeonn, Multiplayer ve daha nicelerine ev sahipliği yaptı.

					</p>

					<p><a class="btn btn-primary" href="https://playit.compec.org/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Playit;