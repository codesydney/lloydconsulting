import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import ScrollToTop from 'react-scroll-up';
import { Link } from 'react-router-dom';
import { FiChevronUp } from "react-icons/fi";
import { slideSlick } from "../page-demo/script";
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/Footer";
import Testimonial from "../elements/Testimonial";
import PortfolioList from "../elements/portfolio/PortfolioList";
import BlogContent from "../elements/blog/BlogContent";
import Brand from "../elements/Brand";
import TabOne from "../elements/tab/TabOne";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--22',
        category: '',
        title: 'UX Research.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--21',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--23',
        category: '',
        title: 'Development.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--20',
        category: '',
        title: 'UX Research.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

class DigitalAgency extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 3);
        let title = 'About',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
        return(
            <Fragment> 
                
                <Helmet pageTitle="Digital Agency" />

                {/* Start Header Area  */}
                <Header logo="light" color="color-white"/>
                {/* End Header Area  */}
                
                {/* Start Slider Area   */}
                <div className="slider-wrapper color-white">
                    <div className="slider-activation slider-digital-agency">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area pt--120 pb--50 bg_color--1">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">What we can do for you</span>
                                    <h2 className="title">Our Awesome Service</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                           </div>
                       </div>
                        <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-center" />
                   </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_image bg_image--3">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--15">
                                        <span className="subtitle">Our complete project</span>
                                        <h2 className="title">Our Project</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="btn-default" href="/portfolio"><span>View Projects</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start About Area */}
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">Our company about</span>
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabOne tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area ptb--120 bg_color--5">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3">
                                    <span className="subtitle">Latest post</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30" key={i}>
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
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="view-more-btn mt--60 text-center">
                                    <a className="btn-default" href="/blog"><span>View More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Our Clients</span>
                                    <h2 className="title">Our Clients</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <Brand branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}
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

export default DigitalAgency;