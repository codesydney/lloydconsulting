import React from 'react';
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import PortfolioList from "../elements/portfolio/PortfolioList";
import { slickDot , portfolioSlick2 } from "../page-demo/script";

const Portfolio_image = <img src="/assets/images/portfolio/portfolio-4.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-5.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-6.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-7.jpg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-9.jpg" alt="React Creative Agency" />;


const list = [
    {
        image: Portfolio_image,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: Portfolio_image2,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: Portfolio_image3,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: Portfolio_image4,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: Portfolio_image5,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: Portfolio_image6,
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

const PortfolioList2 = [
    {
        image: 'image-1',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]

const Portfolio = () => {
    return (
        <>
            <PageHelmet pageTitle='Portfolio' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Portfolio'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <span className="subtitle">All projects</span>
                                        <h2 className="title">All Works</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="btn-default" href="/portfolio"><span>View More Project</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--90 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
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
            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}
        </>
    )
}

export default Portfolio;