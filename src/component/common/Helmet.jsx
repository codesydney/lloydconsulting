import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} || React Multipurpose Template </title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="Imroz – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ." />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
