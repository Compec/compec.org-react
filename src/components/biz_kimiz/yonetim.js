import React from 'react';
import './yonetim.css'
import YonetimKart from './yonetim_kart'
import { YonetimInfo } from './yonetim_info'

function Yonetim() {
	return (
		<div>
			<section id="team" class="pb-5">
				<div class="container">
					<h5 class="section-title h1">Yönetim Kurulu</h5> <hr />
					<div class="row">
						{
							YonetimInfo.YK.map(
								(person) => {
									return (
										<div class="col-sm-12 col-md-4">
											<YonetimKart isim={person.isim} gorev={person.gorev} foto={person.foto} linkedin={person.linkedin} insta={person.insta} face={person.face} twitter={person.twitter} behance={person.behance} link={person.link} />
										</div>
									)
								}
							)
						}
					</div>
					<h5 class="section-title h1">Liderler</h5><hr />
					<div class="row">
						{
							YonetimInfo.Liderler.map(
								(person) => {
									return (
										<div class="col-sm-12 col-md-4">
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