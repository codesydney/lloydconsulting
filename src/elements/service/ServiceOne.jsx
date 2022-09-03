import React, { Component } from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";


const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Awarded Design',
        description: 'There are many variations variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <FiCast />,
        title: 'Design & Creative',
        description: 'Passages there are many variations variations  of of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <FiMap />,
        title: 'App Development',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]
class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
export default ServiceOne;