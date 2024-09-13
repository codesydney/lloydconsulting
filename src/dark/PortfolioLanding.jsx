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

    const PostList = BlogContent.slice(0, 3);
    return (
        <div className="active-dark bg_color--9">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="hero-subheadline">{value.category}</span> : ''}
                                            <h1 className="title hero-headline">
                                                Lloyd Consulting Co
                                            </h1>
                                            <TextLoop>
                                                <h1 className="title highlight"><span>Advocate.</span></h1>
                                                <h1 className="title highlight"><span>Counsellor.</span></h1>
                                                <h1 className="title highlight"><span>Humane.</span></h1>
                                                <h1 className="title highlight">
                                                    <span>Lived </span>
                                                    <span>Experience.</span>
                                                </h1>
                                                <h1 className="title highlight">
                                                    <span>Diversity </span>
                                                    <span>Consultant.</span>
                                                </h1>
                                            </TextLoop>
                                            <h2 className="hero-headline2">Business Done Differently</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''} 
                                            {/*                                          
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            */}
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

            {/* Start About Area */}
            <div id="about" className="fix">
                    <div className="about-area ptb--120  bg_color--8">
                        <div className="about-wrapper">
                            <div className="container">
                                <div className="row row--35">

                                    <div className="col-lg-5">
                                        <div className="thumbnail">
                                            <img className="w-100" src="/assets/images/blog/newImageForBlog-01.jpg" alt="About Images" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <span className="subtitle">About Details</span>
                                                <h2 className="title mb--20">About Lloyd Consulting Co</h2>
                                                <p className="description mt_dec--20">Lloyd Consulting Co understands the future of change management. With over a decade of experience in supporting people to transform their lives for the better, Lloyd Consulting Co knows what is required to sustain change. Lloyd Consulting Co specialises in providing a voice of lived experience for systemic change.
                                                    <br />
                                                    <br />
                                                    We know how to unlock the value of diversity and celebrate difference. Lloyd Consulting Co has successfully developed a program for change. If you a ready for change, reach out and to learn how our Safety First Personal Responsibility approach can help you identify,  understand and implement a support system for change.</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-lg-7">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <br/>
                                                <span className="subtitle">Services</span>
                                                <h2 className="title mb--20">Areas of Expertise</h2>
                                                <p>
                                                    <ul>
                                                        <li>
                                                            Unlocking the value of lived experience
                                                        </li>
                                                        <li>
                                                            Change Behaviour programs | Management
                                                        </li>
                                                        <li>
                                                            Coaching | Counselling | Supervision for lived experience staff
                                                        </li>
                                                        <li>
                                                            Crisis Management
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                </div>

                {/* End About Area */}

                {/* End Contact Area */ }
                <div id="contact" className="fix">
                    <div className="rn-contact-area pb--120 bg_color--8">
                        <ContactThree contactImages="/assets/images/about/contactUs.jpg" contactTitle="Work with me." />
                    </div>
                </div>
            </div>
       


        {/* End Contact Area */ }


        < FooterTwo />
        {/* Start Back To Top */ }
        < div className = "backto-top" >
            <ScrollToTop showUnder={160}>
                <FiChevronUp />
            </ScrollToTop>
                </div >
        {/* End Back To Top */ }
        </div>
    )
}

export default PortfolioLanding;