import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import Helmet from "../component/common/Helmet";
videoTagString({ src: '/assets/images/service/video.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })

const SlideList = [
    {
        textPosition: 'text-center',
        category: 'Have a Studio Agency',
        title: 'Welcome Video Studio',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Learn More',
        buttonLink: '/contact'
    }
]

class StudioAgency extends Component{
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
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment>
                <Helmet pageTitle="Studio Agency" />
                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="8">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className={`inner pt_sm--40 ${value.textPosition}`}>
                                            {value.category ? <span className="theme-color font-700">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title mt--20">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            <a className="btn-default btn-large mt--30" href="/contact"><span>{value.buttonText}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-background">
                                <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/images/service/video.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                    <div className="video-image-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
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
                {/* End Slider Area   */}


                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Service Area  */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--1">
                    <AboutTwo />
                </div>
                {/* End About Area */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Experts growts</span>
                                    <h2 className="title">Our Company Growth</h2>
                                    <p className="description">We have grown strength over the past 20 years.</p>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <span className="subtitle">what's stories on</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30 mt_sm--30">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--30" key={i}>
                                    <div className="im_box">
                                        <div className="thumbnail">
                                            <Link to="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <div className="content_heading">
                                                    <div className="category_list">
                                                        <Link to="/portfolio-details">{value.category}</Link>
                                                    </div>
                                                    <h4 className="title">
                                                        <Link to="/blog-details">{value.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="content_footer">
                                                    <Link to="/blog-details" className="rn-btn btn-opacity">Read More</Link>
                                                </div>
                                            </div>
                                            <Link className="transparent_link" to="/blog-details"></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Top clients</span>
                                    <h2 className="title">We worked with brands.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
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
            </Fragment>
        )
    }
}
export default StudioAgency;