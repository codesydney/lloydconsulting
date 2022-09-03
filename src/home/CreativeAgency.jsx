import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { Link } from 'react-router-dom';
import Header from "../component/header/Header";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import TeamOne from "../blocks/team/TeamOne";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterThree from "../component/footer/FooterThree";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

const image1 =
  "/assets/images/bg/paralax/bg-image-3-overlay.jpg";

const Portfolio_image = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-9.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-10.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-4.jpg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-5.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-6.jpg" alt="React Creative Agency" />;

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Introduce Our <br /> Creative Agency.',
        description: 'There are many variations of passages of Lorem Ipsum <br /> available but the majority have suffered alteration.',
        buttonText: 'Imroz Service',
        buttonText2: 'See Projects',
        buttonLink: '/contact',
        buttonLink2: '/portfolio'
    }
]

const list = [
    {
        image: Portfolio_image,
        category: 'Development',
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image2,
        category: 'Product Design',
        title: 'App Development',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image4,
        category: 'Design',
        title: 'Photoshop',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image5,
        category: 'Shop',
        title: 'Woocommerce',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image6,
        category: 'Medical',
        title: 'Medical Application',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image3,
        category: 'Web Design',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    }
]

class CreativeAgency extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 5);
        return(
            <Fragment>
                <Helmet pageTitle="Creative Agency" />
                <Header logo="light" />
                {/* Start Slider Area   */}
                <div className="slider-activation" id="home">
                    <div className="slider-paralax bg_image bg_image--11 d-flex align-items-center justify-content-center" data-black-overlay="6">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-4" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title" dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                                {value.description ? <p className="description" dangerouslySetInnerHTML={{__html: value.description}}></p> : ''}
                                                <div className="slide-btn button-group">
                                                    <a className="btn-default" href={`${value.buttonLink}`}>{value.buttonText}</a>
                                                    <a className="btn-default btn-border btn-opacity" href={`${value.buttonLink2}`}>{value.buttonText2}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">What we can do for you</span>
                                    <h2 className="title">Services provide for you.</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service mt--30">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--5">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <span className="subtitle">Our project</span>
                                        <h2 className="title">Some of our Recent Works</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="single_im_portfolio" key={index}>
                                                    <div className="im_portfolio">
                                                        <div className="thumbnail_inner">
                                                            <div className="thumbnail">
                                                                <Link to="/portfolio-details">
                                                                    {value.image}
                                                                </Link>    
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="inner">
                                                                <div className="portfolio_heading">
                                                                    <div className="category_list">
                                                                        <Link to="/portfolio-details">{value.category}</Link>
                                                                    </div>
                                                                    <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4>
                                                                </div>
                                                                <div className="portfolio_hover">
                                                                    <p>{value.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link className="transparent_link" to="/portfolio-details"></Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area ptb--120 bg_color--1">
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

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25 mb_sm--0">
                                    <span className="subtitle">Our experts</span>
                                    <h2 className="title">Our Skilled Team</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <TeamOne column="col-lg-4 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="6" />
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--5">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Latest news</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="im_box" key={i}>
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
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}


                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Top clients</span>
                                    <h2 className="title">We worked with brands.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--20">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                 {/* Start Footer Style  */}
                 <FooterThree />
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

export default CreativeAgency;