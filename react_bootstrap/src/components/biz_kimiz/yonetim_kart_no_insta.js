import React from 'react';
import './yonetim.css'

function YonetimKart_noinsta({isim="İsim Soyisim",gorev="Görev",linkedin="https://www.linkedin.com/",foto}) {
    return(
        <div class="image-flip" >
            <div class="mainflip flip-0">
                <div class="frontside">
                    <div class="card shadow" >
                        <div class="card-body text-center">
                            <p><img class=" img-fluid" src={foto} alt="card image"/></p>
                            <h4 class="card-title">{isim}</h4>
                            <p class="card-text"><b>{gorev}</b></p>
                        </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card">
                        <div class="card-body text-center mt-4">
                        <h4 class="card-title">{isim}</h4>
                            <p class="card-text"><b>{gorev}</b></p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href={linkedin}>
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                            <p className="hidden-text">dfgbsdhfg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YonetimKart_noinsta;
