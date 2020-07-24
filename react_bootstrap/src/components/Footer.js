import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <div className="main-footer">
            <div className='footer mt-auto py-3 bg-dark text-white'>
                <div className="container">
                    
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Compec. Tüm hakları saklıdır.
                        </p>
                        <div className="col-sm">
                        <div class="template-demo"> <button type="button" class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></button> <button type="button" class="btn btn-social-icon btn-youtube"><i class="fa fa-youtube-play"></i></button> <button type="button" class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></button> <button type="button" class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></button> <button type="button" class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></button> <button type="button" class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;