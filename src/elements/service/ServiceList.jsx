import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Consulting',
        description: 'Diversity Consultancy from my lived experience.'
    },
    {
        icon: <FiLayers />,
        title: 'Counseling',
        description: 'One on one or Group Sessions.'
    },
    {
        icon: <FiUsers />,
        title: 'Coaching',
        description: 'Bespoke Programs of 3, 6 , 9 or 12 monhts - limited Availability'
    },
    { 
        icon: <FiMonitor />,
        title: 'Programs',
        description: 'Understanding how to embrace and sustain change.'
    },
    {
        icon: <FiUsers />,
        title: 'Public Speaking or Pod cast requests',
        description: 'Check my Social Media for updates.'
    },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/">
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                        <p>{val.observation}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
