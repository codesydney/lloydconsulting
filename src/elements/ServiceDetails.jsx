import React, { Component } from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class ServiceDetails extends Component{
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
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
                                    <h2 className="title theme-gradient">Website Development</h2>
                                    <p>Fresh From The Press Discription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Our service</span>
                                                        <h2 className="title">Providing Service</h2>
                                                        <p className="description">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                        <p className="description">If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                        <li>Risus commodo viverra</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="details">
                                                    <div className="section-title">
                                                        <span className="subtitle">Our service</span>
                                                        <h2 className="title">Providing Service</h2>
                                                        <p className="description">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                        <p className="description">If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing If you are going to use a passage of Lorem Ipsum.</p>
                                                    </div>
                                                    <ul className="list-style--1 mt--30">
                                                        <li><FiCheck /> 5 PPC Campaigns the majority.</li>
                                                        <li><FiCheck /> Digital Marketing going to.</li>
                                                        <li><FiCheck /> Marketing Agency passage of.</li>
                                                        <li><FiCheck /> Seo Friendly you are going.</li>
                                                        <li><FiCheck /> 5 PPC Campaigns the majority.</li>
                                                        <li><FiCheck /> 5 PPC Campaigns the majority.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <span className="subtitle">Our Budget Plan</span>
                                    <h2 className="title">Pricing Plan</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Free</h4>
                                            <div className="pricing">
                                                <span className="price">$45</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Business</h4>
                                            <div className="pricing">
                                                <span className="price">$45</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Advanced</h4>
                                            <div className="pricing">
                                                <span className="price">$99</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}
                
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
export default ServiceDetails;