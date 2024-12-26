import React from 'react';
import  './Footer.css';
import {  Layout } from 'antd';
const { Footer } = Layout;


const FooterComponent = () => {

    return(
        <Footer>
            <section className="l-footer-columns">
                <h3 className="hide">Footer</h3>
                <div className="row animation-parent" data-animation-delay="350">

                    <div className="block large-4 medium-4 columns">
                        <section>			<div className="textwidget">
                            <div className="footer-logo"><img alt="logo" src="https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/06/logo-2.png"/></div></div>
                        </section>  					</div>

                    <div className="block large-4 medium-4 columns">
                        <section><h2 className="block-title">Get in Touch</h2>
                            <div className="block-block contact-details block-block-19 block-even clearfix">
                            <ul className="contact-details-list">
                                <li>
                                    <span><span>Phone:</span> +1 123 457 653</span>
                                </li>
                                <li>
                                    <span><span>Fax:</span> +1 496 457 654</span>
                                </li>
                                <li>
                                    <span><span>Email:</span> <a href="mailto:email@website.com">our-mail@example.com</a></span>
                                </li>
                                <li>
                                    <span><span>Adress:</span> 121 King Street, Melbourne 3000 Australia</span>
                                </li>
                            </ul>
                        </div>
                        </section>	            </div>

                    <div className="block large-4 medium-4 columns">
                        <section>			<div className="textwidget"><h2 className="block-title">Newsletter</h2>
                            Sign up your newsletter

                            <div className="newsletter-div">
                                <input type="text" className="email-adress" placeholder="EMAIL ADRESS" size="20" value="" name="email-adress"/>
                                <input type="submit" className="newslettersubmit" value="GO"/>
                                    <ul className="social-icons accent inline-list">
                                        <li className="flickr">
                                            <a href="http://www.flickr.com/webdevia"><i className="fa fa-flickr"></i></a>
                                        </li>
                                        <li className="facebook">
                                            <a href="https://www.facebook.com/webdevia"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li className="twitter">
                                            <a href="https://twitter.com/webdevia"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li className="vimeo">
                                            <a href="https://vimeo.com/webdevia"><i className="fa fa-vimeo-square"></i></a>
                                        </li>
                                    </ul>
                            </div></div>
                        </section>	            </div>

                </div>

                <footer className="l-footer">
                    <div className="row">
                        <div className="footer large-12">
                            <div class="block">
                                <div class="tireswheels_footer_menu clearfix">
                                    <ul id="menu-footer-menu" class="menu">
                                        <li id="menu-item-3218" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2968 current_page_item menu-item-3218"><a href="https://themes.webdevia.com/tires-wheels/" aria-current="page">Home</a></li>
                                    <li id="menu-item-3133" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3133">
                                        <a href="https://themes.webdevia.com/tires-wheels/blog/">Blog</a>
                                    </li>
                                    <li id="menu-item-3132" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3132">
                                        <a href="https://themes.webdevia.com/tires-wheels/contact-us/">Contact Us</a>
                                    </li>
                                </ul></div>	              </div>
                        </div>
                    </div>
                    <div class="copyright large-12 text-center">
                        <p>
                            © 2025 FrtDijitalPazarlama &amp; .	              </p>
                    </div>
                </footer>
            </section>
        </Footer>
    )
}


export default FooterComponent;