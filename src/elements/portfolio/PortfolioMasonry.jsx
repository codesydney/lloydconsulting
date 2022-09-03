import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-static-01.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-static-02.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-static-03.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-static-04.jpg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-static-06.jpg" alt="React Creative Agency" />;
const Portfolio_image7 = <img src="/assets/images/portfolio/portfolio-static-07.jpg" alt="React Creative Agency" />;
const Portfolio_image8 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
const Portfolio_image9 = <img src="/assets/images/portfolio/portfolio-static-09.jpg" alt="React Creative Agency" />;
const Portfolio_image10 = <img src="/assets/images/portfolio/portfolio-static-01.jpg" alt="React Creative Agency" />;
const Portfolio_image11 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
const Portfolio_image12 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;



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
    },
    {
        image: Portfolio_image4,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image5,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image6,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image7,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image8,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image9,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image10,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image11,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image12,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
]


class PortfolioMasonry extends Component{
    render(){
        const {column } = this.props;
        const list = PortfolioList.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
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
               
            </React.Fragment>
        )
    }
}
export default PortfolioMasonry;