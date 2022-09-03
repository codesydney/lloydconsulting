import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import {
    FaReact,
    FaSass
} from "react-icons/fa";
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp
} from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Fast Performance',
        description: 'Optimized for a smaller build size, faster dev compilation and dozens of other improvements.'
    },
    {
        icon: <FiCast />,
        title: 'Perfect Responsive',
        description: 'Our Template is full Perfect for all device. You can visit our template all device easily.'
    },
    {
        icon: <FiMap />,
        title: 'Fast & Friendly Support',
        description: 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
    },
]


const featureList = [
    {
        icon: <FaReact/>,
        title: 'Latest React 16.8+',
        subtitle: 'We used latest react vertion ^16.8.6.Its a awesome design made by react.'
    },
    {
        icon: <FiSmartphone/>,
        title: 'Perfect Responsive',
        subtitle: 'Our Template is full Perfect for all device. You can visit our template all device easily.'
    },
    {
        icon: <FiCode/>,
        title: 'Well Documented Codes',
        subtitle: 'The Imroz code is awesome well documented code. And Its customization is very easily'
    },
    {
        icon: <FaSass/>,
        title: 'Sass Available',
        subtitle: 'The tamplate has Sass available for css. You can Change css by sass'
    },
    {
        icon: <FiDownload/>,
        title: 'Fast Loading Speed',
        subtitle: 'Imroz is faster loading speed.Imroz create your theme so much faster '
    },
    {
        icon: <FiCommand/>,
        title: 'Modern Design',
        subtitle: 'Imroz is a modern creatuve design for Creative Agency , Personal Portfolio etc....'
    },
    {
        icon: <FiHeadphones/>,
        title: '24 Support System',
        subtitle: 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
    },
    {
        icon: <FiBold/>,
        title: 'Bootstrap Comfortable',
        subtitle: 'Bootstrap comfortable is available in Imroz. So layout changes is so much easily'
    }
]

const singleDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        label: ''
    },
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        label: 'Hot'
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        label: ''
    },
    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        label: ''
    },
    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        label: ''
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        label: 'Hot'
    },

    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        label: ''
    },
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        label: ''
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        label: ''
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        label: ''
    
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        label: ''
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        label: ''
    },
    {
        url: '#comingsoon',
        imageUrl: 'coming-soon.png',
        title: 'Coming Soon',
        label: ''
    }
]

const agencyDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        label: ''
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        label: ''
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        label: ''
    },
    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        label: ''
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        label: ''
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        label: ''
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        label: 'Hot'
    }
  
]

const busenessDemo = [
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        label: 'Hot'
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        label: ''
    },
   
]

const portfolioList = [
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        label: 'Hot'
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        label: ''
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        label: ''
    },

    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        label: ''
    },
    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        label: 'Hot'
    },
]

const landingPage = [
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        label: 'Hot'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        label: ''
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        label: 'Hot'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        label: ''
    },
]

const newDemoList = [
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        label: ''
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        label: 'Hot'
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        label: ''
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        label: ''
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        label: 'Hot'
    },
]

const innerDemo = [
    {
        url: 'service',
        imageUrl: 'service.png',
        title: 'Service',
    },
    {
        url: 'service-details',
        imageUrl: 'service-details.png',
        title: 'Service Details',
    },
    {
        url: 'about',
        imageUrl: 'about.png',
        title: 'About',
    },
    {
        url: 'blog',
        imageUrl: 'blog-list.png',
        title: 'Blog List',
    },
    {
        url: 'blog-details',
        imageUrl: 'blog-details.png',
        title: 'Blog Details',
    },
    {
        url: 'portfolio',
        imageUrl: 'portfolio.png',
        title: 'Portfolio',
    },
    {
        url: 'portfolio-details',
        imageUrl: 'portfolio-details.png',
        title: 'Portfolio Details',
    },
    
    {
        url: 'video-popup',
        imageUrl: 'video-popup.png',
        title: 'Video popup',
    },
    {
        url: 'contact',
        imageUrl: 'contact.png',
        title: 'Contact',
    },

]

class Demo extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render() {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return (
            <div className="active-dark">
                {/* Start Banner Area  */}

                <header className={`header-area header--transparent formobile-menu header--transparent color--black`}>
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <ul className="mainmenu">
                                    <li><a href="#demo">View Demo</a></li>
                                    <li><a href="#feature">Feature</a></li>
                                    <li><a href="#faq">FAQ</a></li>
                                    <li><a target="_blank" href="http://rainbowit.net/docs/imroz/">Documentation</a></li>
                                    <li><a target="_blank" href="https://support.rainbowit.net/support/">Friendly Support</a> </li>
                                </ul>
                            </nav>
                            
                            <div className="header-btn">
                                <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular">
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
                
              
                {/* Start Slider Area   */}
                <div className="pv-slider-area slider-wrapper">
                    <div className="slider-activation">
                        {/* Start Single Slide */}
                        <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--34" data-black-overlay="9">
                            <div className="container position-relative">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner">
                                            <h1 className="title theme-gradient">Quick agency & portfolio template for your next website</h1>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Start Service Area */}
                                <div className="service-wrapper service-white">
                                    <div className="row row--25">
                                        {ServiceList.map( (val , i) => (
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                <div className="service service__style--1">
                                                    <div className="icon">
                                                        {val.icon}
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">{val.title}</h4>
                                                        <p>{val.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* End Service Area */}

                            </div>
                        </div> 
                        {/* End Single Slide */}
                    </div>
                </div>
                {/* End Slider Area   */}


                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper">

                    {/* Start Main Demo Area  */}
                    <div id="demo" className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="title theme-gradient">Home Demo</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas. <br/> More
                                            demos are coming soon.</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                                <div className="row text-center">
                                    <div className="col-lg-12">
                                        <div className="tablist-inner">
                                            <TabList className="pv-tab-button text-center mt--30">
                                                <Tab><span>All Demo</span></Tab>
                                                <Tab><span>Agency</span></Tab>
                                                <Tab><span>Corporate</span></Tab>
                                                <Tab><span>Portfolio</span></Tab>
                                                <Tab><span>Landing</span></Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                                
                                <TabPanel className="row">
                                    {singleDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {agencyDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {busenessDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {portfolioList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {landingPage.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    {/* End Main Demo Area  */}

                    {/* Start Main Demo  */}
                    <div className="home-demo-area bg_color--5 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <h2 className="title theme-gradient">Inner Pages</h2>
                                        <p className="description">Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {innerDemo.map((value , index) => (
                                    // Start Single Demo
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-demo">
                                            <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                <h3 className="title">{value.title}</h3>
                                            </a>
                                        </div>
                                    </div>
                                    // End Single Demo
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo  */}

                    {/* Start Feature Area  */}
                    <div id="feature" className="service-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <span className="subtitle">Our Imroz Feature</span>
                                        <h2 className="title">Awesome Feature</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row service-main-wrapper">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2 text-left">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End Single Feature  */}
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                     {/* Start Faq Area */}
                    <div id="faq" className="pv-feaq-area bg_color--5 ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="section-title text-left pb--30">
                                        <span className="subtitle theme-gradient">Check out our FAQ section to see if we can help.</span>
                                        <h2 className="title">Do you have any Question</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        What is Imroz ? How does it work?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Welcome to Imroz React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!. It works too much faster loading speed and you can works too much comfortability.Imroz create your website so much faster, use to use and Well Documented Codes for your customization.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I run Imroz react template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>You can run Imroz easily.
                                                    First You'll need to have node and npm on your machine.
                                                    So Please open your command prompt then check your node -v and npm -v Version.
                                                    Goes To Your your command prompt: then
                                                    First: <strong className="theme-color">npm install</strong></p>
                                                    <p>At Last: <strong className="theme-color">npm run start</strong>. By the following way you can be run your project easily.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>


                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I get the customer support?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        After purchasing the product  need you any support you can be share with us with sending mail to <a className="theme-gradient" href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I get update regularly and For how long do I get updates?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, We will get update the Imroz. And you can get it any time. Next time we will comes with more feature.
                                                        You can be get update for unlimited times. Our dedicated team works for update.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I change any component as I like?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, You can change any component as you like. And By the way you can build your website which you are choose.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I build a complete project with this template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, Why not. You can build a project and complete website as you are like. More component are available include in this templete. And you can be use it following documentation.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                          
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                     {/* Start Faq Area */}
                                    

                    {/* Start Footer Area  */}
                    <footer className="pv-callto-action call-to-action-wrapper text-white-wrapper call-to-action ptb--120 bg_image bg_image--34" data-black-overlay="9">
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Purchase The Imroz and Make Your Site super faster and easy.</span>
                                        <h2 className="mt--20 theme-gradient font-700">Let's go to Purchase</h2>
                                        <div className="footer-btn mt--35">
                                            <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular"><span>Purchase Now</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}

                </div>
                {/* End Preview Main Wrapper */}
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
}
export default Demo;
