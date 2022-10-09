import React from 'react';
import { Accordion, Card, Container, NavLink } from 'react-bootstrap';
import "./yonetim.css"
import { Helmet } from 'react-helmet';

function Altkurullar() {
	return (
		<div className="container altKurullar">
			<Helmet>
				<title>Alt Kurullarımız - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="Compec, Boğaziçi Bilişim Ödülleri, DevTeam, Dijital Girişimcilik, Oyun Geliştirme, PR, Teknoloji ve Veri Bilimi olmak üzere 7 alt kurulu bünyesinde barındırır."
				/>
			</Helmet>
			<h1 class="text-center text-lg-left mt-4 mb-0">Alt Kurullarımız</h1>
			<hr class="mb-5" />
			<h5>
				Boğaziçi Üniversitesi Bilişim Kulübü, haftalık toplantılarla bir araya gelen, her biri farklı alanlarda çalışan 7 alt kurulu bünyesinde barındırır:
			</h5>
			<Accordion className="altkurullar_accordion" defaultActiveKey="0" style={{ marginBottom: "60px", marginTop: "2rem" }} >
				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="0">
							Boğaziçi Bilişim Ödülleri
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Container>
								<Card.Body>
								Boğaziçi Bilişim Ödülleri Alt Kurulu, bilişim dünyasının enlerinin halk ve jüri oylaması sonucu Albert Long Hall'de 9.'sunun 18 Aralık tarihinde düzenleneceği Boğaziçi Bilişim Ödülleri organizasyonunun alt kuruldakilerle birlikte düzenlenmesinden sorumludur.  Bu etkinlik, alanında en iyi olan ve yeni çıkış yapan bilişim dünyasının en önemli kişileriyle birlikte oldukça prestijli bir gece olarak gerçekleştirilir.
								</Card.Body>
							</Container>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="1">
							DevTeam
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Container>
							<Card.Body>
								DevTeam, yazılım geliştirmeyle ilgilenen kişilerin bir araya geldiği, ilgi duyulan konularda tecrübeli kişilerden veya topluluklarla iş birliği yapıldığı, yeni projelerin üretildiği, hackathon'lara ve benzeri yarışmalar için gerekli alt yapının hazırlandığı alt kuruldur. Yazılımın her alanıyla ilgilenip ortak konularını işleyen DevTeam'in ortaya koyduğu projeler daha çok web ve mobil tabanlıdır.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="2">
							Dijital Girişimcilik
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Container>
							<Card.Body>
								Dijital Girişimcilik alt kurulunu kulüpte girişimcilik ile ilgilenenlerin bir araya geldiği alt kuruldur. Sene içinde bu yıl ilki düzenlenecek olan Digitalized Dijital Girişimcilik Zirvesi ve Yarışmasını çıkarılmasından sorumludur. Alt kurulun amacı, üyelerin her hafta girişimciliğin farklı yönleri hakkında bilgi sahibi olmasını sağlayıp yılın en sonunda kendi girişiminini çıkarabilecek bilgiye ve özgüvene eriştirmektir.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="3">
							Oyun Geliştirme
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="3">
						<Container>
							<Card.Body>
							Oyun Geliştirme Alt Kurulu, Boğaziçi GameJam'in düzenlenmesinden, oyun geliştirme eğitimlerinin verilmesinden ve GameDevTalks serisinin çekilmesinden sorumludur. Boğaziçi GameJam 48 saatlik bir ödüllü oyun geliştirme maratonudur. Kazanlar hem para hem de staj ve daha fazlasıyla ödüllendirilir. Alanında uzman kişilerle oyun geliştirme sektöründeki iş imkanlarıyla üyelerin tanıştırılması amaçlanır. GameDevTalks, oyun geliştirme sektöründe çalışan kişilerin online olarak bizimle yaptığı ve Youtube'da yayınladığımız kariyer temalı sohbet serileridir. Aynı zamanda workshoplarla ve alt kurul sohbetleriyle bu alana dair her şeyi üyelerin öğrenmesi amaçlanır.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="4">
							PR
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="4">
						<Container>
							<Card.Body>
								PR alt kurulu, kulübümüzün bilinirliğinin arttırmak amacıyla belirlerdiği stratejiler doğrultusunda tanıtım çalışmaları geliştiren alt kuruldur. Etkinliklerin tanıtım çalışmalarında diğer alt kurullarla birlikte çalışır. Sosyal medya ve blog platformları için içerik üretme, tanıtım materyalleri tasarlama, etkinliklerde fotoğraf çekme, video düzenleme ve tasarım yapma PR alt kurulunun sorumlulukları arasındadır.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="5">
							Teknoloji
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="5">
						<Container>
							<Card.Body>
							Teknoloji alt kurulu, kulübün en köklü etkinliklerinden olup öğrenciler tarafından düzenlenen ulusal çaptaki en büyük teknoloji zirvesi olan TechSummit'in organizasyonundan sorumludur. Alt kurul üyeleri sene içinde organizasyon tecrübesi kazanırlar. Dönem boyunca gerçekleşecek, alanında uzman isimleri de konuk edeceğimiz ekip toplantılarında robotikten IoT teknolojilerine, üç boyutlu baskıdan bilgisayar görüşüne teknoloji sektörünün birçok farklı trendi ele alınır. Ayrıca hedef kitlesi teknolojiye erişimi kısıtlı bölgelerdeki 7-12 yaş arası öğrenciler olan şehir dışı sosyal sorumluluk projemiz TeknoDolu'ya, Teknoloji ekibi öncülük etmektedir.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="6">
							Veri Bilimi
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="6">
						<Container>
							<Card.Body>
							Veri Bilimi alt kurulu, veri bilimi, makine öğrenmesi ve yapay zeka disiplinleri ile ilgilenenlerin bir araya geldiği ve Veri Bilimi ile ilgilenen kulüp üyelerinin kendini geliştirdiği, birlikte projeler yaptığı alt kuruldur. Alt kurul Veri Bilimi alanında Machine Learning, Excel, Tableau gibi çeşitli eğitimler düzenler ve alt kurul üyelerinin sene sonuna kadar Veri Bilimi’nde belirli bir yetkinliğe ulaşmasını amaçlar. Bu amaç doğrultusunda alt kurulda çalışma grupları oluşturur. Ayrıca bu yıl 4. kez düzenlenecek Boğaziçi DataCamp Veri Bilimi Zirvesi'nin organize edilmesinden sorumludur.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="7">
						Kurumsal İletişim
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="7">
						<Container>
							<Card.Body>
							Kurumsal İletişim alt kurulunun temel görevi kulübün sponsorluklarının yapılması, şirketlerle yürütülen süreçlerin takip edilmesi, sürdürülmesi ve kulübün şirket kontaklarının artırılmasını sağlamaktır. Alt kurulu yoktur. 6 kariyer kulübü tarafından düzenlenen P&R Days Kariyer Fuarı’nın kulüp içindeki organizasyonundan sorumludur. Üyelerin bilgilenmesi ve tecrübe kazanmasını hedef almakla beraber kulübün dış networkünü geliştirirken iyi ilişkiler kurar.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

				{/* <Card>
					<Card.Header>
						<Accordion.Toggle as={NavLink} variant="link" eventKey="8">
						İç İletişim
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="8">
						<Container>
							<Card.Body>
							İç İletişim, kulüp içi eğlence aktivitelerini düzenleyen, bunu yaparken de kulüp üyelerinin arasındaki bağı güçlendirmeyi amaçlayan alt kuruldur. Haftalık online-offline takılmacalar, Youroomluyoruz, TagNight ve Kilyos101 gibi başlıca etkinlikleriyle kulüp üyelerini bir araya getirir ve insanların keyifli vakit geçirmesini sağlar.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card> */}

			</Accordion>
		</div>
	);
}

export default Altkurullar;