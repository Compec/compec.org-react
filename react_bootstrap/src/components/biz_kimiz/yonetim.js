import React from 'react';
import YonetimKart from './yonetim_kart'
import YonetimKart_noinsta from './yonetim_kart_no_insta'
import './yonetim.css'

function Yonetim(){
    return(
        <div>
            <section id="team" class="pb-5">
                <div class="container">
                    <h5 class="section-title h1">Yönetim Kurulu</h5> <hr/>
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Elif Besler"} gorev={"Yönetim Kurulu Başkanı"} linkedin={"https://www.linkedin.com/in/elifbesler/"} insta={"https://www.instagram.com/elifbeslerr/"} foto={"/yonetim/Elif.jpg"} />
                        </div>
                        
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Arif Emre Kiraz"} gorev={"Genel Sekreter"} linkedin={"https://www.linkedin.com/in/arifemrekiraz/"} insta={"https://www.instagram.com/emreeekiraz/"} foto={"/yonetim/Arif Emre.png"}/>
                        </div>
                        
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Ahmet Eren Öztürkmen"} gorev={"Kurumsal İletişim ve Finans Direktörü"} linkedin={"https://www.linkedin.com/in/ahmeterenozturkmen/"} insta={"https://www.instagram.com/aeozturkmen/"} foto={"/yonetim/Ahmet Eren.jpeg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/* YAĞMUR KARA */}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Yağmur.jpeg" alt="card image"/></p>
                                                <h4 class="card-title">Yağmur Kara</h4>
                                                <p class="card-text"><b>PR Direktörü</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Yağmur Kara</h4>
                                                <p class="card-text"><b>PR Direktörü</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/yagmurkara/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/yagmrkaraa/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/yagmrkaraaa">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Emre Burak Baş"} gorev={"AR-GE Direktörü"} linkedin={"https://www.linkedin.com/in/emreburakbas/"}  insta={"https://instagram.com/emreburakbas"}  foto={"/yonetim/EmreBurak.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/* AHMET YİĞİT DOĞAN*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/ayd.jpg" alt="card image"/></p>
                                                <h4 class="card-title">Ahmet Yiğit Doğan</h4>
                                                <p class="card-text"><b>Teknoloji Direktörü</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Ahmet Yiğit Doğan</h4>
                                                <p class="card-text"><b>Teknoloji Direktörü</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/ayigitdogan/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/ayigitdogan/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/ayigitdogan">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.behance.net/ayigitdogan">
                                                            <i class="fa fa-behance"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*ENES DÖKE*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/EnesDöke.jpeg" alt="card image"/></p>
                                                <h4 class="card-title">Enes Döke</h4>
                                                <p class="card-text"><b>Organizasyon Direktörü</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Enes Döke</h4>
                                                <p class="card-text"><b>Organizasyon Direktörü</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/enesdoke/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/enesdoke/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/enesdoke">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*MERT KARACA*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Mert.jpg" alt="card image"/></p>
                                                <h4 class="card-title">Mert Karaca</h4>
                                                <p class="card-text"><b>Organizasyon Direktörü</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Mert Karaca</h4>
                                                <p class="card-text"><b>Organizasyon Direktörü</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://linkedin.com/in/mert-karaca-36799b18b">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://instagram.com/therealmertkaraca/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/mertgalecki">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart_noinsta isim={"Serdar Bayraktar"} gorev={"İç İletişim Direktörü"} linkedin={"https://www.linkedin.com/in/serdarbayraktar/"} foto={"/yonetim/Serdar.jpg"}/>
                        </div>

                    </div>
                    <h5 class="section-title h1">Liderler</h5><hr/>
                    <div class="row">

                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Ahmet Burkay Kınık"} gorev={"Veri Bilimi Lideri"} linkedin={"https://www.linkedin.com/in/aburkaykinik/"} insta={"https://www.instagram.com/ahmetburkayknk/"} foto={"/yonetim/AhmetBurkayKınık.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/* AHMET İKBAL ADLIĞ */}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/default.png" alt="card image"/></p>
                                                <h4 class="card-title">Ahmet İkbal Adlığ</h4>
                                                <p class="card-text"><b>Oyun Geliştirme Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Ahmet İkbal Adlığ</h4>
                                                <p class="card-text"><b>Oyun Geliştirme Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/ahmetikbaladlig/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/ikbaladlig/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/ikbal13">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/ikbaladlig">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="http://ahmetikbal.com/">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart_noinsta isim={"Alperen Özyılmaz"} gorev={"Kurumsal İletişim Lideri"} linkedin={"https://www.linkedin.com/in/alperen-%C3%B6zy%C4%B1lmaz-8527051a6"} foto={"/yonetim/AlperenÖzyılmaz.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Bayram Ali Huyut"} gorev={"Teknoloji Lideri"} linkedin={"https://www.linkedin.com/in/bahuyut"} insta={"https://www.instagram.com/ba_huyut/"} foto={"/yonetim/BayramAliHuyut.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Berat Damar"} gorev={"DevTeam Lideri"} linkedin={"https://www.linkedin.com/in/emreburakbas/"} foto={"/yonetim/"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Berkay İşler"} gorev={"Veri Bilimi Lideri"} linkedin={"https://www.linkedin.com/in/berkay-i%C5%9Fler-01a279104/"} insta={"https://www.instagram.com/berkay.islerr/"} foto={"/yonetim/Berkayİşler.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Beyza İrem Urhan"} gorev={"Veri Bilimi Lideri"} linkedin={"https://www.linkedin.com/in/emreburakbas/"} foto={"/yonetim/"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Büşra Hastürk"} gorev={"PR Lideri"} linkedin={"http://linkedin.com/in/büşra-hastürk-2223a6196"} insta={"https://www.instagram.com/busra.hasturk/"} foto={"/yonetim/BüşraHastürk.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Cem Karaduman"} gorev={"İç İletişim Lideri"} linkedin={"https://www.linkedin.com/in/cem-karaduman-8b93a5196"} insta={"https://instagram.com/cemkaraduman17"} foto={"/yonetim/Cem Karaduman.jpeg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*ERKİNALP ÖZCAN */}                
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Erkinalp Özcan.jpeg" alt="card image"/></p>
                                                <h4 class="card-title">Erkinalp Özcan</h4>
                                                <p class="card-text"><b>PR Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Erkinalp Özcan</h4>
                                                <p class="card-text"><b>PR Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/erkinalpozcan/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/erkinalpozcan/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.behance.net/erkinalpzcan">
                                                            <i class="fa fa-behance"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Halil İbrahim Çetinkaya"} gorev={"PR Lideri"} linkedin={"http://linkedin.com/in/mdoceans"} insta={"https://www.instagram.com/mdoceans/"} foto={"/yonetim/Halilİbrahim.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Halim Yasin Zümre"} gorev={"Oyun Geliştirme Lideri"} linkedin={"https://www.linkedin.com/in/halimyasinzumre/"} insta={"https://www.instagram.com/halimyzumre/"} foto={"/yonetim/HalimYasinZümre.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart_noinsta isim={"Hasan Kerem Biseli"} gorev={"Teknoloji Lideri"} linkedin={"http://www.linkedin.com/in/hasankerembiseli"} foto={"/yonetim/Hasan Kerem Biseli.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Kutalp Dilber"} gorev={"Dijital Girişimcilik Lideri"} linkedin={"https://www.linkedin.com/in/kutalpdilber/"} insta={"https://www.instagram.com/kutalpdilber/"} foto={"/yonetim/KutalpDilber.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart_noinsta isim={"Leyla Karaoğulları"} gorev={"Dijital Girişimcilik Lideri"} linkedin={"https://www.linkedin.com/in/leyla-karao%C4%9Fullar%C4%B1-36a9b6149"} foto={"/yonetim/leyla karaoğulları.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*MEHMET EMİN AL*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Mehmet-emin-al.jpg" alt="card image"/></p>
                                                <h4 class="card-title">Mehmet Emin Al</h4>
                                                <p class="card-text"><b>DevTeam Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Mehmet Emin Al</h4>
                                                <p class="card-text"><b>DevTeam Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/mhmteminal">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://instagram.com/mhmteminal">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/mhmteminal">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://mehmeteminal.com.tr/">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Merve Nur Hündür"} gorev={"DevTeam Lideri"} linkedin={"linkedin.com/in/merve-nur-hündür-25913116a"} insta={"https://www.instagram.com/hndrmerve/"} foto={"/yonetim/merve nur hündür.png"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Metehan Gül"} gorev={"Kurumsal İletişim Lideri"} linkedin={"https://www.linkedin.com/in/metehangul"} insta={"https://instagram.com/Metehng"} foto={"/yonetim/Metehan Gül.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/* MİRAC YİĞİT */}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/MiracYiğit.jpeg" alt="card image"/></p>
                                                <h4 class="card-title">Mirac Yiğit</h4>
                                                <p class="card-text"><b>Teknoloji Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Nur Alkan</h4>
                                                <p class="card-text"><b>Teknoloji Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="http://linkedin.com/in/miracyigit">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://instagram.com/miraccyigitt">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/miraccyigitt1">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/* NUR ALKAN*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/NurAlkan.png" alt="card image"/></p>
                                                <h4 class="card-title">Nur Alkan</h4>
                                                <p class="card-text"><b>Teknoloji Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Nur Alkan</h4>
                                                <p class="card-text"><b>Teknoloji Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="http://linkedin.com/in/nur-alkan-832531195">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://instagram.com/nur_alkan">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/nuralk11">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Ömer Can Çalı"} gorev={"Dijital Girişimcilik Lideri"} linkedin={"https://www.linkedin.com/in/cancali"} insta={"https://instagram.com/can_cali01/"} foto={"/yonetim/default.png"}/>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Sefa Kaya"} gorev={"Boğaziçi Bilişim Ödülleri Lideri"} linkedin={"https://www.linkedin.com/in/sefakaya1"} insta={"https://www.instagram.com/sfky_/"} foto={"/yonetim/Sefa KAYA.jpg"}/>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*TUBA DAĞLI*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Tuba Dağlı.jpg" alt="card image"/></p>
                                                <h4 class="card-title">Tuba Dağlı</h4>
                                                <p class="card-text"><b>İç İletişim Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Tuba Dağlı</h4>
                                                <p class="card-text"><b>İç İletişim Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/tuba-da%C4%9Fli-84a9561b3/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://instagram.com/tuba.dl">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/2bayadatuba">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4"> {/*YİĞİT DOĞAN*/}
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card shadow" >
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src="/yonetim/Yiğit Doğan.jpg" alt="card image"/></p>
                                                <h4 class="card-title">Yiğit Doğan</h4>
                                                <p class="card-text"><b>Boğaziçi Bilişim Ödülleri Lideri</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Yiğit Doğan</h4>
                                                <p class="card-text"><b>Boğaziçi Bilişim Ödülleri Lideri</b></p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/yigitdo%C4%9Fan312/">
                                                            <i class="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://www.instagram.com/yigiitdogann/">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/yigitdogaan">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <YonetimKart isim={"Zeynep Özmen"} gorev={"Boğaziçi Bilişim Ödülleri Lideri"} linkedin={"https://www.linkedin.com/in/zeynep-%C3%B6zmen-830327195/"} insta={"https://www.instagram.com/zeyoozmen/"} foto={"/yonetim/Zeynep Özmen.jpg"}/>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
// kaynak: https://bootsnipp.com/snippets/92xNm
export default Yonetim;