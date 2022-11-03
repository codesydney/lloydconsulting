import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lloyd Consulting Co</title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="Lloyd Consulting Co" />
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
