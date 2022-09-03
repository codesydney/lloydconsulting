import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-9.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-10.jpg" alt="React Creative Agency" />;

const PortfolioList = [
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
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Some of our Recent Works',
        description = 'There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Our project</span>
                                    <h2 className="title">{title}</h2>
                                    <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
                            {PortfolioList.map((value , index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={index}>
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
            </React.Fragment>
        )
    }
}
export default Portfolio;