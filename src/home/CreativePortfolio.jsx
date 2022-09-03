import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { Link } from 'react-router-dom';
import Helmet from "../component/common/Helmet";
import Footer from "../component/footer/Footer";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/HeaderFour";
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-1.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-2.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-3.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-4.jpg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-5.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-6.jpg" alt="React Creative Agency" />;
const Portfolio_image7 = <img src="/assets/images/portfolio/portfolio-7.jpg" alt="React Creative Agency" />;
const Portfolio_image8 = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="React Creative Agency" />;

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
        image: Portfolio_image3,
        category: 'Design',
        title: 'Photoshop',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image4,
        category: 'Shop',
        title: 'Woocommerce',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image5,
        category: 'Medical',
        title: 'Medical Application',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image6,
        category: 'Web Design',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },

    {
        image: Portfolio_image7,
        category: 'Medical',
        title: 'Medical Application',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image8,
        category: 'Web Design',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
]

const CreativePortfolio = () => {
    return (
        <div className="creative-portfolio">
            <Helmet pageTitle="Creative Portfolio" />
            
            {/* Start Header Area  */}
            <Header headerPosition="header--static pt--15 pb--15" logo="symbol-dark" color="color-black"/>
            {/* End Header Area  */}

            {/* Start Portfolio Area  */}
            <div className="creative-portfolio-wrapper bg_color--1 pb--30">
                <div className="creative-portfolio-wrapper plr--30">
                    <div className="row mt_dec--30">
                        {list.map((value , i ) => (
                            <div className="col-xl-3 col-lg-6 col-md-6 col-12 mt--30" key={i}>
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

                    </div>
                </div>
            </div>
            {/* End Portfolio Area  */}            

            {/* Start Footer Style  */}
            <Footer />
            {/* End Footer Style  */}
            
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

export default CreativePortfolio;