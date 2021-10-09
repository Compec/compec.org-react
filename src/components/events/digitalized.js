import React from 'react';
import { Helmet } from 'react-helmet';
import './events.css'

function Digitalized() {
	return (
		<div class="container">
			<Helmet>
				<title>Digitalized - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta
					name="description"
					content="Digitalized katılımcılara dijital bir girişim yaratma konusunda ilham vermeyi hedefleyen Zirve ve Yarışma'dan oluşan bir girişimcilik serüvenidir"
				/>
			</Helmet>
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_digitalized.jpg" alt="Digitalized" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Digitalized</h1><br />
					<p>
						Compec’in en yeni etkinliklerinden biri olan Digitalized bir dijital girişimcilik zirvesidir. Digitalized her gün ayrı bir dijital girişimcilik teknolojisini konu alarak compecin teknoloji altyapısını girişimci adaylarına aktarmak için tasarlandı! Aynı zamanda interaktif workshoplar açarak ve birbirinden değerli konuklarını ağırlayarak ekosistemi tanıtmayı, network alanlarıyla birlikte simülasyonlarıyla katılımcılarına ekosistemden tecrübeler kazandırmayı hedeflemektedir.
					</p>
					<p><a class="btn btn-primary" href="https://compec.org/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Digitalized;