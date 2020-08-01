import React from 'react'

function YonetimKart(props){
    return(
        <div class="image-flip" >
            <div class="mainflip flip-0">
                <div class="frontside">
                    <div class="card shadow" >
                        <div class="card-body text-center">
                            <p><img class=" img-fluid" src={props.foto} alt="card image"/></p>
                            <h4 class="card-title">{props.isim}</h4>
                            <p class="card-text"><b>{props.gorev}</b></p>
                        </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card">
                        <div class="card-body text-center mt-4">
                        <h4 class="card-title">{props.isim}</h4>
                            <p class="card-text"><b>{props.gorev}</b></p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href={props.linkedin}>
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                {props.insta &&
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={props.insta}>
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                }
                                {props.face &&
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={props.face}>
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                }
                                {props.twitter &&
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={props.twitter}>
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                }
                                
                                {props.behance &&
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={props.behance}>
                                            <i class="fa fa-behance"></i>
                                        </a>
                                    </li>
                                }
                                {props.link &&
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={props.link}>
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </li>
                                }
                            </ul>
                            <p className="hidden-text">dfgbsdhfgggggg hdjgjfh dgsfd hffgdfh mgnh fgdbsdg fnhmfng dbsv</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YonetimKart