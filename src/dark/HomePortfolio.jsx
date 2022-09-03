import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ProgressOne from "../blocks/progressbar/ProgressOne";
import ServiceTwo from "../elements/service/ServiceTwo";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Minimal',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

class HomePortfolio extends Component {
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
            <div className="active-dark bg_color--10"> 
                <Helmet pageTitle="Home Portfolio" />

                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--24" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}

                {/* Start portfolio Area  */}
                <div className="rn-portfolio-area bg_color--10 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">My complete project</span>
                                    <h2 className="title">Our Project</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row">
                            <PortfolioMasonry item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="view-more-btn mt--60 text-center">
                                    <a className="btn-default" href="/portfolio"><span>View More Project</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End portfolio Area  */}

                <div className="service-area pb--120 bg_color--10">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>

                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area pb--120 bg_color--10">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <div className="progress-content-here">
                                    <div className="section-title text-left">
                                        <span className="subtitle">Our Skill</span>
                                        <h2 className="title">Agency Skill</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
                                    </div>
                                    <ProgressOne ProgressStyle="progress-bar--3" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

                {/* Start Brand Area */}
                <div className="rn-brand-area pb--120 bg_color--10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Top video</span>
                                    <h2 className="title">Our Clients Review</h2>
                                </div>
                            </div>
                        </div>
                        <div className="video-image-wrapper mt--30">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/blog/bl-big-02.jpg" alt="Service Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div> 
                    </div>
                </div>
                {/* End Brand Area */}                

                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </div>
        )
    }
}
export default HomePortfolio;