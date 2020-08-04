import React from 'react';
import './events.css'

function BBO() {
	return (
		<div class="container">
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./BingImageOfTheDay_20200720.jpg" alt="Boğaziçi Bilişin Ödülleri" />
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
					2018 yılında düzenlenen, BUMK Klasik Müzik Korosunun açılışta yaptığı dinleti ile renk kattığı ödül töreninde ödül 
					sahipleri, Tansel Öngel'in sunuculuğunda ödülleriyle buluştu. Bu sene yine Aralık ayında 7.'si düzenlenecek olan ödül töreni, 
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