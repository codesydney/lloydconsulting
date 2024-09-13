import React from 'react';
import {FaYoutube , FaLinkedinIn, FaInstagram} from "react-icons/fa";

const SocialShare = [
    {Social: <FaYoutube /> , link: 'https://youtube.com/@LloydConsultingCo?feature=shared'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/dean-m-lloyd-criminalconsultant/?originalSubdomain=au'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/lloydconsulting_co'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_color--6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="#">
                                    <img src="/assets/images/logo/logo-light.png" alt="FooterTwo Logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-center text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Crafted By <a href="https://www.code.sydney/" target="_blank" rel="noopener noreferrer">Code.Sydney</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;
