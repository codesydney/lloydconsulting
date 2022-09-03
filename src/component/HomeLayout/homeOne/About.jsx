import React, { Component } from "react";
import { FiSend } from "react-icons/fi";

import { Link } from 'react-router-dom';
class About extends Component{
    render(){
        let title = 'Refreshingly Unique Company About.',
        description = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        description2 = 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences';

        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                        <div className="purchase-btn">
                                            <Link className="btn-transparent" to="/">PURCHASE IMROZ</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;