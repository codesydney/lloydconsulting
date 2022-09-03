import React from 'react'
import TeamOne from "./team/TeamOne";
import TeamTwo from "./team/TeamTwo";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const Team = () => {
    return (
        <>
            <PageHelmet pageTitle='Team' />
            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Team'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Team Area  */}
                <div className="rn-team-wrapper ptb--120 bg_color--1">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <span className="subtitle">Our Experts</span>
                                        <h2 className="title">Our Skilled Team</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-4 col-md-6 col-12" teamStyle="" item="3" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper ptb--120 bg_color--5">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <span className="subtitle">Our Experts</span>
                                        <h2 className="title">Our Skilled Team</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamTwo column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="" item="4" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper ptb--120 bg_color--1">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <span className="subtitle">Our Experts</span>
                                        <h2 className="title">Our Skilled Team</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-12" teamStyle="team-style--bottom" item="8" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

            </main>
            {/* End Page Wrapper  */}
            

             {/* Start Back To Top */}
             <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
}

export default Team