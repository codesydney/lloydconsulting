import React, { Component } from "react";

class AboutTwo extends Component{
    render(){
        let title = 'About',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--20 align-items-center">

                            <div className="col-lg-6 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">Read About Us</span>
                                        <h2 className="title">Read Company Values</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered alteration.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Honest</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Strategy</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Development</h5>
                                                <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
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
            </React.Fragment>
        )
    }
}
export default AboutTwo;