import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import ModalVideo from 'react-modal-video';
import { FiChevronUp, FiCheck } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import HeaderTwo from "../component/header/HeaderTwo";
import FooterTwo from "../component/footer/FooterTwo"
import BrandTwo from "../elements/BrandTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ContactOne from "../elements/contact/ContactOne";
import CallAction from "../elements/callaction/CallAction";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Freelance digital designer',
        title: 'Hello, I’m <span>Fatima.</span>',
        description: 'I’m working on a professional, visually sophisticated and technologically <br /> proficient, responsive and multi-functional React Template Imroz.',
        buttonText: 'Download CV',
        buttonLink: ''
    }
]
class PersonalPortfolio extends Component {
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
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
        ];
        let title = 'My About',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
        return(
            <Fragment> 
                <Helmet pageTitle="Personal Portfolio" />
                
                <HeaderTwo logo="symbol-dark" color="color-black"/>
                
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slider_fixed_height slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16 white-overlay-mobile" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="theme-gradient font-500">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title" dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                            {value.description ? <p className="description" dangerouslySetInnerHTML={{__html: value.description}}></p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="btn-default" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-5.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">Read About Me</span>
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div> 
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h5 className="title">Educational Skill</h5>
                                                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h5 className="title">My Strategy</h5>
                                                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h5 className="title">Development Skill</h5>
                                                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h5 className="title">My Quality</h5>
                                                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Brand Area  */}
                <div className="rn-brand-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25 mb_sm--0">
                                    <span className="subtitle">My Top clients</span>
                                    <h2 className="title">Clients Meeting With Me</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--30">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-10.png" alt="About Images"/>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="row pt--120">
                            <div className="col-lg-12">
                                <BrandTwo branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* Start About Area  */}
                <div className="rn-about-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">My Performance</span>
                                        <h2 className="title">My Best Performance</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae? adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="about-button mt--30">
                                        <a className="btn-default" href="/about">See My Skill</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--60 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55 mb_sm--0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">Our project</span>
                                        <h2 className="title">Some of My Recent Works</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="btn-default" href="/blog"><span>View Projects</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--120 bg_color--1">
                    <ContactOne />
                </div>
                {/* End Portfolio Area */}

                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}

                <FooterTwo />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default PersonalPortfolio;