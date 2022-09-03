import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

const FooterThree = () => {
    return (
        <div className="footer-style-3 pt--100 pb--30 bg_color--6">
            <div className="wrapper">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <div className="callto-action-area">
                                <h2 className="title text-white mb--25">Interested you <br /> working with us.</h2>
                                <div className="contact-btn">
                                    <a className="btn-default" href="/contact">Contact Us</a>
                                </div>
                            </div>
                            <div className="logo">
                                <a href="/home-one">
                                    <img src="/assets/images/logo/logo-light.png" alt="Logo images"/>
                                </a>
                            </div>
                            <ul className="social-share d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                            <div className="text mt--20">
                                <p>© 2022 <a target="_blank" href="https://themeforest.net/user/rainbow-themes/portfolio">Rainbow-Themes</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterThree;