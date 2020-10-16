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
								Boğaziçi Bilişim Ödülleri alt kurulu sene boyunca bilişim alanında en çok öne çıkan profesyonelleri ve kurumları prestijli bir ödülle buluşturan etkinlik olan Boğaziçi Bilişim Ödülleri’nin düzenlenmesiyle sorumludur. Bunun yanında sene boyunca bilişimle ilgili önemli bilgileri aktaran Teknoloji Magazini TechMag’in sorumluluğu ve sene boyunca ödül sahipleri ile yapılan podcast, söyleşi, röportaj gibi etkinlikler de bu alt kurulun sorumluluğundadır.
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
								Dijital Girişimcilik alt kurulunu kulüpte girişimcilik ile ilgilenenlerin bir araya geldiği alt kuruldur. Sene içinde bu yıl 5. defa düzenlenecek olan E-Founder Dijital Girişimcilik Zirvesi ve Yarışmasını çıkarılmasından sorumludur. Alt kurulun amacı, üyelerin her hafta girişimciliğin farklı yönleri hakkında bilgi sahibi olmasını sağlayıp yılın en sonunda kendi girişiminini çıkarabilecek bilgiye ve özgüvene eriştirmektir.
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
								Oyun Geliştirme altkurulu sene boyunca oyun geliştirme eğitimleri düzenlemesinin yanında, sömestr projesi adı altında tüm Oyun Geliştirme üyeleriyle birlikte projeler yapar, röportaj ve podcastler düzenler, ikinci dönem düzenlenecek olan DevelopIT etkinliğinin sorumluluğunu üstlenir ve GameJam'ler düzenler.
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
								Teknoloji alt kurulu, kulübün en köklü etkinliklerinden ve ulusal çapta öğrenciler tarafından düzenlenen en büyük teknoloji zirvesi olan TechSummit'in organizasyonundan sorumludur. Alt kurul üyeleri sene içinde organizasyon tecrübesi kazanmanın yanı sıra donanımsal ve yazılımsal becerilerini geliştirerek kulübe yeni projeler kazandırırlar. Dönem boyunca gerçekleşecek, alanında uzman isimleri de konuk edeceğimiz ekip toplantılarında robotikten IoT teknolojilerine, üç boyutlu baskıdan bilgisayar görüşüne teknoloji sektörünün birçok farklı trendi ele alınır. Ayrıca hedef kitlesi teknolojiye erişimi kısıtlı bölgelerdeki 7-12 yaş arası öğrenciler olan şehir dışı sosyal sorumluluk projemiz TeknoDolu'ya, Teknoloji ekibi öncülük etmektedir.
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
								Veri Bilimi alt kurulu, veri bilimi, makine öğrenmesi ve yapay zeka disiplinleri ile ilgilenenlerin bir araya geldiği ve Veri Bilimi ile ilgilenen kulüp üyelerinin kendini geliştiriği, projeler yaptığı alt kuruldur. Alt kurul Veri Bilimi alanında çeşitli eğitimler ve atölyeler düzenler, kulüp tanıtımı için kulüp verileri ile çeşitli görselleştirmeler yapar. Bu yıl 3. kez düzenlenecek Boğaziçi DataCamp Zirvesi'nin organize edilmesinden ve ilgili etkinliklerin sosyal medya kanallarının yönetilmesinden sorumludur.
							</Card.Body>
						</Container>
					</Accordion.Collapse>
				</Card>

			</Accordion>
		</div>
	);
}

export default Altkurullar;