import React, { Component , Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Home & Office Collection',
        description: 'Finest choice for your home & office',
        buttonText: 'Say Hello With Us',
        buttonLink: '/contact'
    }
]
const Portfolio_image = <img src="/assets/images/portfolio/interior/portfolio-8.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/interior/portfolio-9.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/interior/portfolio-10.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/interior/portfolio-11.jpg" alt="React Creative Agency" />;

const PortfolioList = [
    {
        image: Portfolio_image,
        category: 'Interior',
        title: 'Kitchen Collection',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image2,
        category: 'Home Design',
        title: 'Office Decoration',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image3,
        category: 'Interior',
        title: 'Bedroom Lighting',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image4,
        category: 'Office Interior',
        title: 'Bowls & Vases',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
]

const PortfolioList2 = [
    {
        image: Portfolio_image,
        category: 'Design',
        title: 'Landcape Design',
        description: 'Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse.'
    },
    {
        image: Portfolio_image2,
        category: 'Design',
        title: 'Landcape Design',
        description: 'Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse.'
    },
    {
        image: Portfolio_image3,
        category: 'Interior',
        title: 'Home Interior',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.'
    },
    {
        image: Portfolio_image4,
        category: 'Interior',
        title: 'Home Interior',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.'
    },
    {
        image: Portfolio_image2,
        category: 'Lighting',
        title: 'Bedroom Lighting',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.'
    },
    {
        image: Portfolio_image3,
        category: 'Lighting',
        title: 'Bedroom Lighting',
        description: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, conse.'
    }
]


const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Interior Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-02.png",
        title: 'Landcape Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-03.png",
        title: 'Home Interior',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    
]

class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

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
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
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
                <Helmet pageTitle="Interior Design" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color one-page-navigation">
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
                                <Scrollspy className="mainmenu" items={['home','service','getstart','about','team','testimonial','portfolio']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Get Start</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="btn-default btn-border btn-opacity" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular">
                                    <span>buy now</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
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
                <div className="slider-activation im_modern_slider" id="home">
                    <div className="bg_image bg_image--29" data-black-overlay="5">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner pt_sm--40 ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
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
                            <div className="col-lg-10 col-xl-8">
                                <div className="feature-area">
                                    <span className="subtitle theme-gradient">FUTURE HOUSE</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">What you look your hopefull house we can be made it for yours. We can be design yours house so dont woory you can hire us. Beautiful and hand made design we can be create.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon"/>
                                            </div>
                                            <div className="content mt--20">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row mt_dec--30">
                            {PortfolioList.map((value , index) => (
                                <div className="col-lg-6 col-md-6 col-12 mt--30" key={index}>
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
                {/* End Portfolio Area */}

                {/* Start Call To Action Area  */}
                <div className="call-to-action-wrapper call-to-action callto-action-style-2 text-white-wrapper" id="getstart">
                    <div className="bg_image bg_image--30 ptb--200 ptb_lg--80 ptb_md--80 ptb_sm--80" data-black-overlay="5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <h2>Ready to start creating a standard website?</h2>
                                        <p>Finest choice for your home & office</p>
                                        <a className="btn-default btn-large btn-hover-white mt--50 mt_sm--30 mt_md--30" href="/contact"><span>Purchase Imroz</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1" id="about">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <div className="thumbnail">
                                <img src="/assets/images/featured/featured-01.jpg" alt="Featured Images"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
                            <div className="content">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">Modern Design For Interior</span>
                                        <h2 className="title">Read Company Values</h2>
                                        <p className="description">Uniq interior design provide for your home. you can be create as you like. Our modern designer provide as you are like.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Honest</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Strategy</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Development</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Quality</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="purchase-btn mt--50">
                                        <a className="btn-transparent" href="/about">WHY WE'RE DIFFERNT VALUES</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* End Content Box  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title text-left mb--30">
                                        <span className="subtitle">Our Experts</span>
                                        <h2 className="title">Meet Our Designer</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="4" />
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
                
                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title text-left mb--30">
                                    <span className="subtitle">Our Recent Works</span>
                                    <h2 className="title">All Works</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--30 mt_sm--30">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value , index) => (
                                    <div className="im_portfolio" key={index}>
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
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

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

export default InteriorLanding;