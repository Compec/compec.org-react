import React from 'react'
import './FooterNavbar.css'
function Footer(){
    return(
        <div className="main-footer">
            <div className='footer mt-auto py-3 bg-dark text-white'>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <p className="copyright">
                                &copy;{new Date().getFullYear()} Compec. Tüm hakları saklıdır.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <div class="template-demo">
                                
                                <a href="http://facebook.com/bouncompec" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-facebook">
                                        <i class="fa fa-facebook"></i>
                                    </button> 
                                </a>
                                
                                <a href="https://www.youtube.com/user/compecboun" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-youtube">
                                        <i class="fa fa-youtube-play"></i>
                                    </button> 
                                </a>
                                
                                <a href="http://twitter.com/bouncompec" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-twitter">
                                        <i class="fa fa-twitter"></i>
                                    </button> 
                                </a>
                                
                                <a href="https://github.com/Compec" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-github">
                                        <i class="fa fa-github"></i>
                                    </button> 
                                </a>

                                <a href="https://www.linkedin.com/company/bouncompec" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-linkedin">
                                        <i class="fa fa-linkedin"></i>
                                    </button> 
                                </a>
                                
                                <a href="http://instagram.com/bouncompec" target="_blank">
                                    <button type="button" class="btn btn-social-icon btn-instagram">
                                        <i class="fa fa-instagram"></i>
                                    </button> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;