import React from "react"
import { Container } from "react-bootstrap"
import CountUp from "react-countup"
import "./Home.css"

function HomeAbout() {
	const Missions = [
		{
			Name: "Networking",
			Text:
				"Üyelerimiz ve etkinliklerimize Türkiye’nin dört bir yanından ilgi gösteren öğrenciler ve profesyonellerin birbirleri ile tanışmalarına ve etkileşime geçmelerine olanak sağlıyoruz.",
			imgSrc: "./download (2).png",
			reverseOrder: true,
		},
		{
			Name: "Eğitim",
			Text:
				"Teknolojiye ilgi duyan herkese bölüm ayırt etmeksizin yazılım ve dijital tasarım başta olamak üzere birçok farklı alanda bilgi edinme ve teknik olarak kendilerini geliştirme fırsatı sunuyoruz.",
			imgSrc: "./download (2).png",
			reverseOrder: false,
		},
		{
			Name: "Kariyer",
			Text:
				"Bir kariyer kulübü olarak üyelerimizi ve katılımcılarımızı gerek kurumsal hayata gerekse akademik hayata erkenden hazırlamayı ve onlara kariyer planlamalarında yardımcı olmayı hedefliyoruz.",
			imgSrc: "./download (2).png",
			reverseOrder: true,
		},
		{
			Name: "Sosyal Sorumluluk",
			Text:
				"Sene boyunca aldıkları eğitimler ile kendini geliştiren üyelerimizin öğrendiklerini yaşça küçük öğrencilere aktarmalarını ve teknoloji konusunda yetkin nesillerin yetişmesine katkıda bulunmayı amaçlıyoruz.",
			imgSrc: "./download (2).png",
			reverseOrder: false,
		},
	]
	return (
		<div className="HomeAbout">
			<Container>
				<div class="row featurette">
					<div className="col">
						<div class="homeheader">
							<h1 className="h1">
								Compec, 1994'ten beri Boğaziçi Üniversitesi'nde
								teknolojiye öncülük ediyor.
							</h1>
						</div>
					</div>
				</div>
				<hr />
				<section
					id="counter-stats"
					class="wow fadeInRight"
					data-wow-duration="1.4s"
				>
					<div class="container">
						<div class="row">
							<div class="col-lg-3 stats">
								<i class="fa fa-user" aria-hidden="true"></i>
								<div>
									<CountUp end={5000} suffix={"+"} />
								</div>
								<h5>Katılımcı</h5>
							</div>

							<div class="col-lg-3 stats">
								<i
									class="fa fa-calendar"
									aria-hidden="true"
								></i>
								<div>
									<CountUp end={54} suffix={"+"} />
								</div>
								<h5>Etkinlik</h5>
							</div>

							<div class="col-lg-3 stats">
								<i
									class="fa fa-envelope-o"
									aria-hidden="true"
								></i>
								<div>
									<CountUp end={13000} suffix={"+"} />
								</div>
								<h5>Kişilik İletişim Ağı</h5>
							</div>

							<div class="col-lg-3 stats">
								<i class="fa fa-rocket" aria-hidden="true"></i>
								<div>
									<CountUp end={1200} suffix={"+"} />
								</div>
								<h5>Yeni Üye</h5>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<h1
					style={{
						textAlign: "center",
						marginBottom: "50px",
						marginTop: "50px",
					}}
				>
					Misyonumuz
				</h1>
				{Missions.map((mission, index) => (
					<>
						{index > 0 && <hr class="featurette-divider" />}
						<div class="row featurette">
							<div
								class={
									mission.reverseOrder
										? "col-md-7 order-md-2"
										: "col-md-7"
								}
							>
								<h2 class="featurette-heading">
									{mission.Name}
								</h2>
								<p class="lead">{mission.Text}</p>
							</div>
							<div
								class={
									mission.reverseOrder
										? "col-md-5 order-md-1"
										: "col-md-5"
								}
							>
								<img
									class="featurette-image img-fluid mx-auto"
									data-src="holder.js/500x500/auto"
									alt="500x500"
									width="500"
									height="500"
									src={mission.imgSrc}
									data-holder-rendered="true"
								/>
							</div>
						</div>
					</>
				))}
				<hr />
				<section class="home-newsletter">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div class="single">
									<h2>Mail Ağımıza Katılın!</h2>
									<div class="input-group">
										<input
											type="email"
											class="form-control"
											placeholder="E-Postanızı Yazınız"
										/>
										<span class="input-group-btn">
											<button
												class="btn btn-theme"
												type="submit"
											>
												Abone Ol
											</button>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</div>
	)
}

export default HomeAbout
