import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import { Link } from 'react-router-dom';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: 'Learn more',
        buttonLink: '/#contact'
    }
]
const PortfolioLanding = () => {
    let title = 'About Lloyd Consulting Co',
        description = 'Lloyd Consulting Co is a non profit charity organisation from Dean M. Lloyd';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark bg_color--9">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Lloyd Consulting Co <br/>
                                            <TextLoop>
                                                <span> Advocate.</span>
                                                <span> Counsellor.</span>
                                                <span> Humane.</span>
                                                <span> Lived Experience.</span>
                                                <span> Diversity Consultant.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Business Done Differently</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="about-area ptb--120  bg_color--8">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">

                <div id="contact" className="fix">
                    <div className="rn-contact-area pb--120 bg_color--8">
                        <ContactThree contactImages="/assets/images/about/contactUs.jpg" contactTitle="Work with me." />
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Contact Area */}


            <FooterTwo />
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

export default PortfolioLanding;
