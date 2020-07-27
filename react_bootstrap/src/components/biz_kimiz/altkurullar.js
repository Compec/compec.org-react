import React from 'react';
import {Accordion,Card,Container, NavLink} from 'react-bootstrap';

function Altkurullar(){
    return(
        <Container>
            <h1 class="text-center text-lg-left mt-4 mb-0">Alt Kurullarımız</h1>
            <hr class="mb-5"/>
            <h5>
                Boğaziçi Üniversitesi Bilişim Kulübü, haftalık toplantılarla bir araya gelen, her biri farklı alanlarda çalışan 7 alt kurulu bünyesinde barındırır:
            </h5>
            <Accordion className="altkurullar_accordion" defaultActiveKey="0" style={{marginBottom:"60px", marginTop:"2rem"}} >
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
                                Boğaziçi Bilişim Ödülleri, yılın teknolojiyle ilgili enlerinin belirlendiği, ünlülerin de katılım sağladığı, Aralık ayında gerçekleşen prestijli bir ödül gecesi olup, Boğaziçi Bilişim Ödülleri liderleri ve ekibi tarafından düzenlenir. Sene boyunca devam eden altkurul toplantılarının yapılması, kategorilerin revize edilmesi, adayların belirlenmesi, jürinin seçimi, oylamaları takip edip verilerle ilgilenme, konseptin belirlenmesi, düzenleme-geliştirme, altkurul üyelerinin sene boyunca belirlenen kategorilerde haber çıkarmasını sağlama, adaylarla yapılacak olan podcast, röportaj ve şirket gezisi gibi etkinliklerin sorumluluğunu üstlenme gibi gerçekleştirilecek her şeyin takibi liderlerin sorumluluğu altındadır. Liderler, etkinlik tanıtım sürecini PR liderlerinin, web sayfalarının hazırlığını ise DevTeam liderlerinin yardımıyla üstlenmektedir. Boğaziçi Bilişim Ödülleri liderleri topluluk yönetimi, iyi ilişkiler, içerik elde etme, üretme, yenilik getirme konularında kendilerini ve altkurul üyelerini geliştirirler.
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
                            Dev-Team liderleri, yazılım geliştirmeyle ilgilenen kişilerin bir araya geldiği, ilgi duyulan konularda tecrübeli kişilerden veya topluluklarla iş birliği yapıldığı, yeni projelerin üretildiği, hackathon'lara ve benzeri yarışmalar için gerekli alt yapıyı hazırlayan Dev-Team alt kurulunu yönetir. Ekiple beraber çeşitli projelerin ortaya çıkması için gerekli ortamı sağlar. Kulübün teknik tarafıyla ilgilenir. Hem kulübün hem de etkinliklerin web sitelerini oluşturur ve sonrasında bakımına yardımcı olur. Dev-Team Liderleri, dönem başlamadan yazılım eğitimlerini planlar ve eğitim sürecini yönetir. Eğitime katılanları kulübe kazandırmaya, kendilerini ve alt kurul üyelerini temel yazılım konularında geliştirmeye çalışır.
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
                            Sene içinde bu yıl 5. defa düzenlenecek olan E-Founder Dijital Girişimcilik Zirvesi ve Yarışmasını çıkarılmasından sorumludur. Ayrıca kulüpte girişimcilik ile ilgilenenlerin bir araya geldiği Dijital Girişimcilik alt kurulunu yönetir. Alt kurulun amacı, üyelerin her hafta girişimciliğin farklı yönleri hakkında bilgi sahibi olup yılın en sonunda kendi girişiminini çıkarabilecek bilgiye ve özgüvene erişmektir. Girişimcilik liderleri E-Founder etkinliğinin organizasyonundan ve sosyal medya kanallarının yönetilmesinden, alt kurul için ayarlanacak eğitimlerden ve alt kurula girişimcilik kültürünün öğretilmesinden sorumludurlar, kulüp içerisindeki girişimcilik ekosisteminin geliştirilmesiyle ilgilenirler.
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
                        Game Development altkurulu, bu sene Compec’in faaliyete geçirdiği iki yeni altkuruldan birisidir. Game Development Liderleri sene boyunca devam eden altkurul toplantılarının yapılması, ikinci dönem yapılacak olan Boğaziçi Üniversitesi Dijital Oyun Zirvesi PlayIT’nin organizasyonu, düzenlenecek veya katılım gösterilecek olan tüm GameJam’ler, altkurulda verilecek eğitimlerin ayarlanması, oyun yapımcılarıyla düzenlenecek olan podcast, video ve canlı yayın gibi içeriklerin çıkarılması ve tüm altkurulun birlikte çıkaracağı sömestr projesinden sorumludur. Game Development liderleri; oyun geliştirme ve oyunların geliştirilme süreçleri konularında hevesli ve öğrenmeye açıktır.
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
                            PR alt kurulu, kulübümüzün bilinirliğinin arttırmak amacıyla belirlerdiği stratejiler doğrultusunda tanıtım çalışmaları geliştiren alt kuruldur. PR liderleri, diğer alt kurullarla iletişim halindedir ve etkinliklerin tanıtım çalışmalarında diğer alt kurullarla birlikte çalışır.  Sosyal medya içeriği üretme, web sitesi için blog içeriği üretme ve üyeleri üretmeye teşvik etme, tanıtım materyalleri tasarlama, video düzenleme ve tasarım yapma PR liderlerinin sorumlulukları arasındadır. Sosyal medya hesaplarının başlıca yöneticisi PR liderleridir. Etkinlikler sırasında fotoğraf çekimi PR'ın denetiminde olmakla birlikte kulübün tüm gönüllü üyeleriyle birlikte gerçekleştirilmelidir. Liderler süreç boyunca alt kurul üyeleriyle beraber dijital pazarlama, grafik tasarım, video düzenleme gibi konularda motivasyona sahiptir ve sene içerisinde eğitimler alarak bu alanlarda iyileşir.                            
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
                        Boğaziçi TechSummit, ekip direktörü ve liderleri tarafından düzenlenir. İkinci dönemin başlarında düzenlenecek olan TechSummit için liderler sene başından beri haftalık olarak düzenlenen toplantıları yönetir, ekibin koordinasyonunu sağlar ve 3 gün sürecek olacak zirvenin içeriğini sıfırdan ortaya çıkarır. Zirveye dahil olan şirketlerle sponsorluk görüşmeleri, panel ve oturumların tasarlanması, şirket gezilerinin düzenlenmesi, workshopların ayarlanması, etkinlik tanıtımının sağlanması, sosyal medya hesaplarının yönetilmesi gibi konularla ilgilenir ve ortaya marka değeri yüksek bir etkinlik çıkarmış olurlar. Ayrıca hedef kitlesi ilkokul ve ortaokul öğrencileri olan şehir dışı sosyal sorumluluk projesi TeknoDolu'nun düzenlenmesinden sorumludurlar. Teknoloji liderleri sene içinde kendilerini donanımsal ve yazılımsal olarak geliştirerek kulübe yeni projeler de kazandırırlar.                         </Card.Body>
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
                        Bu sene ilk kez açılacak Veri Bilimi alt kurulunun yönetilmesinden, 3. kez düzenlenecek Boğaziçi DataCamp Zirvesi'nin organize edilmesinden ve ilgili etkinliklerin sosyal medya kanallarının yönetilmesinden sorumludurlar. Veri Bilimi alt kurulu, veri bilimi, makine öğrenmesi ve yapay zeka disiplinleri ile ilgilenenlerin bir araya geldiği ve Veri Bilimi ile ilgilenen kulüp üyelerinin kendini geliştiriği, projeler yaptığı alt kuruldur.  Liderler sene boyunca alt kurulu yönetir, Veri Bilimi alanında çeşitli eğitimler ve atölyeler düzenler, kulüp tanıtımı için kulüp verileri ile çeşitli görselleştirmeler yaparlar.                        </Card.Body>
                    </Container>                    
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </Container>
    );
}

export default Altkurullar;