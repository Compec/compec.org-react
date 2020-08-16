import React from 'react';
import './events.css'

function BBO() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_bbo.jpg" alt="Boğaziçi Bilişin Ödülleri" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Boğaziçi Bilişim Ödülleri.</h1><hr />
					<p>
					Boğaziçi Bilişim Ödülleri, 2014'ten bu yana her yıl bilişim ve teknoloji alanında profesyonellerin ve kurumların 
					ödüllendirildiği bir ödül törenidir. Ödüllerin kazananları, geniş çaplı bir halk oylaması ile 20 günlük bir süreçte belirlenir. 
					Kasım ayının başında başlayan oylama süreci, Aralık ayının ilk haftasında sonlanır ve kategori kazananları belirlenir. 
					Oylama süreci farklı ülkelerden kullanıcılar tarafından internet sitesi üzerinden gerçekleştirilir. Adaylar halk oylamasının 
					yanı sıra alanında uzman kişilerin yer aldığı jüri tarafından oylanır.
					2019 yılında düzenlenen, Boğaziçi Caz Ensemble'ın ve yirmi7'nin yaptıkları müzik dinletileriyle ile renk kattığı ödül töreninde ödül 
					sahipleri, Yunus Günçe'nin sunuculuğunda ödülleriyle buluştu. Bu sene yine Aralık ayında 8.'si düzenlenecek olan ödül töreni, 
					bilişimin enlerine ev sahipliği yapacak.
					</p>

					<p><a class="btn btn-primary" href="https://bogazicibilisimodulleri.com/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default BBO;