import React, { Component } from 'react'
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class Button extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle='Button' />
                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Button'}   />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">
                    <div className="rn-button-wrapper ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="button-group">
                                        <a className="btn-default btn-large" href="#button">Button Solid</a>
                                        <a className="btn-default btn-border btn-large" href="#button">Button Border</a>
                                        <a className="btn-default btn-dark btn-large" href="#button">Button Dark</a>
                                        <a className="btn-default btn-dark btn-border btn-large" href="#button">Button Border</a>
                                    </div>

                                    <div className="button-group mt--50">
                                        <a className="btn-default" href="#button">Button Solid</a>
                                        <a className="btn-default btn-border" href="#button">Button Border</a>
                                        <a className="btn-default btn-dark" href="#button">Button Dark</a>
                                        <a className="btn-default btn-dark btn-border" href="#button">Button Border</a>
                                    </div>

                                    <div className="button-group mt--50">
                                        <a className="btn-default size-md" href="#button">Button Solid</a>
                                        <a className="btn-default btn-border size-md" href="#button">Button Border</a>
                                        <a className="btn-default btn-dark size-md" href="#button">Button Solid</a>
                                        <a className="btn-default btn-dark btn-border size-md" href="#button">Button Border</a>
                                    </div>
                                    <div className="button-group mt--50">
                                        <a className="btn-default size-sm" href="#button">Button Solid</a>
                                        <a className="btn-default btn-border size-sm" href="#button">Button Border</a>
                                        <a className="btn-default btn-dark size-sm" href="#button">Button Solid</a>
                                        <a className="btn-default btn-dark btn-border size-sm" href="#button">Button Border</a>
                                    </div>

                                    <div className="button-group mt--50">
                                        <a className="btn-default color-secondary" href="#button">Button Solid</a>
                                        <a className="btn-default color-secondary size-md" href="#button">Button Border</a>
                                        <a className="btn-default color-secondary size-sm" href="#button">Button Border</a>
                                    </div>

                                    <div className="button-group mt--50">
                                        <a className="btn-default btn-border color-secondary" href="#button">Button Border</a>
                                    </div>

                                    <div className="button-group mt--50">
                                        <a className="btn-transparent" href="#button">View More Button</a>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
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
}
export default Button;