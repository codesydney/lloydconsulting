import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { slideSlick } from "../page-demo/script";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import GoogleMapReact from 'google-map-react';
import ServiceTwo from "../elements/service/ServiceTwo";
import Testimonial from "../elements/Testimonial";
import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import ProgressOne from "../blocks/progressbar/ProgressOne";
import Helmet from "../component/common/Helmet";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--15',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--12',
        category: '',
        title: 'Development.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--13',
        category: '',
        title: 'UX Research.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]


class Startup extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render(){
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment> 
                <Helmet pageTitle="Startup" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-border btn-large btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--1">
                    <AboutTwo />
                </div>
                {/* End About Area */}
                <div className="service-area ptb--120 bg_color--5">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}


                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area ptb--120 bg_color--5">
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



                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-12">
                                <div className="section-title text-left">
                                    <span className="subtitle">what's stories on</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
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

                {/* Start Contact Map  */}
                <div className="rn-contact-map-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--50">
                                    <span className="subtitle">Office Location</span>
                                    <h2 className="title">Our Office Location</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            {/* Start Single Map  */}
                            <div className="col-lg-6">
                                <div className="rn-contact-map-area position-relative">
                                    <div style={{ height: '400px', width: '100%' }}>
                                        <GoogleMapReact
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                        >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                        </GoogleMapReact>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Map  */}
                            {/* Start Single Map  */}
                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                <div className="rn-contact-map-area position-relative">
                                    <div style={{ height: '400px', width: '100%' }}>
                                        <GoogleMapReact
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                        >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                        </GoogleMapReact>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Map  */}
                        </div>
                    </div>
                </div>
                {/* End Contact Map  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </Fragment>
        )
    }
}
export default Startup;