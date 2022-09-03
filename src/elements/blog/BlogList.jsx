import React, { Component ,Fragment } from "react";
import BlogContent from "./BlogContent";
import { Link } from 'react-router-dom';

class BLogList extends Component{
    render() {
        const PostList = BlogContent.slice(0 , 6);
        return (
             <Fragment>
                 <div className="row mt_dec--30">
                    {PostList.map((value , i ) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30" key={i}>
                            <div className="im_box">
                                <div className="thumbnail">
                                    <Link to="/blog-details">
                                        <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="content_heading">
                                            <div className="category_list">
                                                <Link to="/portfolio-details">{value.category}</Link>
                                            </div>
                                            <h4 className="title">
                                                <Link to="/blog-details">{value.title}</Link>
                                            </h4>
                                        </div>
                                        <div className="content_footer">
                                            <Link to="/blog-details" className="rn-btn btn-opacity">Read More</Link>
                                        </div>
                                    </div>
                                    <Link className="transparent_link" to="/blog-details"></Link>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;