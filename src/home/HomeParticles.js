import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from "react-tsparticles";
import { FiChevronUp , FiX , FiMenu, FiCheck } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterTwo from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import AboutThree from "../component/HomeLayout/homeOne/AboutThree";

const Portfolio_image = <img src="/assets/images/portfolio/interior/portfolio-15.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/interior/portfolio-12.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/interior/portfolio-13.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/interior/portfolio-14.jpg" alt="React Creative Agency" />;


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Creative One Page',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const PortfolioList = [
    {
        image: Portfolio_image,
        category: 'Agency',
        title: 'Agency Collection',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image2,
        category: 'Home Design',
        title: 'Office Managemnt',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image3,
        category: 'Company',
        title: 'Company Inner',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image4,
        category: 'Office Interior',
        title: 'Creative Agency',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
]

class HomeParticles extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
   

    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
        ];

        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
                <Helmet pageTitle="Home Particles" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service', 'about', 'portfolio','team','testimonial','blog', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="btn-default btn-border btn-opacity" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular">
                                    <span>Buy Now</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles className="particle"  
                            options={{
                                style:{
                                    position: "absolute"
                                },
                                fpsLimit: 100,
                                interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick: {
                                    enable: true,
                                    mode: "push",
                                    },
                                    onHover: {
                                    enable: true,
                                    mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 100,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 10,
                                        color: "#888",
                                    },
                                    push: {
                                    quantity: 4,
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4,
                                        color: "#888",
                                    },
                                },
                                },
                                particles: {
                                color: {
                                    value: "#888",
                                },
                                links: {
                                    color: "#888",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                   
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 2000,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
                    <div className="im_modern_slider bg_image bg_image--27 ">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description_style-2">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
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
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="section-title text-left mb--30">
                                    <span className="subtitle">What we can do for you</span>
                                    <h2 className="title">Services provide for you.</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 


                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--5" id="about">
                    <AboutThree />
                </div>
                {/* End About Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30 mb_sm--0">
                                        <span className="subtitle">Our project</span>
                                        <h2 className="title">Some of our Recent Works</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {PortfolioList.map((value , index) => (
                                    <div className="col-lg-6 col-sm-6 col-12 mt--30" key={index}>
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
                </div>
                {/* End Portfolio Area */}


                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Experts growts</span>
                                    <h2 className="title">Our Company Growth</h2>
                                </div>
                            </div>
                        </div>
                        <CounterTwo />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-left mb--25 mb_sm--0">
                                    <span className="subtitle">Our Experts</span>
                                    <h2 className="title">Skilled Team</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-left">
                                    <span className="subtitle">what's stories on</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
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

                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}


                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
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
export default HomeParticles;