import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCheck } from "react-icons/fi";
const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100  bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Getting tickets to the big show</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="row row--35 mb--50">
                                        <div className="col-lg-6">
                                            <div className="inner">
                                                <div className="section-title">
                                                    <h2 className="title">Creative agency</h2>
                                                    <p className="description mt--30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form have suffered alteration in some form.</p>
                                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                                </div>
                                                <div className="portfolio-view-list d-flex flex-wrap">
                                                    <div className="port-view">
                                                        <span>Branch</span>
                                                        <h4>Ability</h4>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Project Types</span>
                                                        <h4>Website</h4>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Program</span>
                                                        <h4>View Project</h4>
                                                    </div>
                                                </div>
                                                <div className="portfolio-details-btn mt--30">
                                                    <a className="btn-default btn-border" href="/portfolio">Launch The Site</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div className="inner">
                                                    <div className="section-title">
                                                        <h4 className="title">Our Products</h4> 
                                                        <p className="description mt--30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form have suffered alteration in some form.</p>
                                                        <p className="description mt--30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                                        <ul className="list-style--1">
                                                            <li><FiCheck /> 5 PPC Campaigns 5 PPC Campaigns</li>
                                                            <li><FiCheck /> Digital Marketing Digital Marketing</li>
                                                            <li><FiCheck /> Marketing Agency Marketing Agency</li>
                                                            <li><FiCheck /> Seo Friendly Seo Friendly</li>
                                                        </ul>     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Related Work</span>
                                    <h2 className="title">Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails;
