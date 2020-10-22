import React from 'react';
import './yonetim.css'
import YonetimKart from './yonetim_kart'
import { YonetimInfo } from './yonetim_info'
import { Helmet } from 'react-helmet';

function Yonetim() {
	return (
		<div>
			<Helmet>
				<title>Yönetim Ekibi - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="Boğaziçi Üniversitesi Bilişim Kulübü Yönetimi olarak 9 Yönetim Kurulu Üyesi ve 25 Liderden oluşan büyük bir ekibiz!"
				/>
			</Helmet>
			<section id="team" class="pb-5">
				<div class="container">
					<h1 class="section-title">Yönetim Kurulu</h1>
					<div class="row">
						{
							YonetimInfo.YK.map(
								(person) => {
									return (
										<div class="col-sm-12 col-md-6 col-lg-4">
											<YonetimKart isim={person.isim} gorev={person.gorev} foto={person.foto} linkedin={person.linkedin} insta={person.insta} face={person.face} twitter={person.twitter} behance={person.behance} link={person.link} />
										</div>
									)
								}
							)
						}
					</div>
					<br/> <br/>
					<h1 class="section-title">Liderler</h1> <br/>
					<div class="row justify-content-md-center">
						{
							YonetimInfo.Liderler.map(
								(person) => {
									return (
										<div class="col-sm-12 col-md-6 col-lg-4">
											<YonetimKart isim={person.isim} gorev={person.gorev} foto={person.foto} linkedin={person.linkedin} insta={person.insta} face={person.face} twitter={person.twitter} behance={person.behance} link={person.link} />
										</div>
									)
								}
							)
						}
					</div>
				</div>
			</section>
		</div>
	);
}

// kaynak: https://bootsnipp.com/snippets/92xNm
export default Yonetim;