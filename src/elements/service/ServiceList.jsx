import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor} from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Consulting',
        description: 'Diversity Consultancy from my lived experience.'
    },
    {
        icon: <FiLayers />,
        title: 'Counseling',
        description: 'One on One Group Sessions'
    },
    {
        icon: <FiUsers />,
        title: 'Coaching',
        description: 'Bespoke Programs of 3, 6, 9 or 12 Months - Limited Availabilty'
    },
    { 
        icon: <FiMonitor />,
        title: 'Programs',
        description: 'Understanding How To Embrace and Sustain Change.'
    },
    {
        icon: <FiUsers />,
        title: 'Public Speaking or Podcast Requests',
        description: 'Check My Social Media for Updates'
    }
    // ,
    // { 
    //     icon: <FiMonitor />,
    //     title: '',
    //     description: ''
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
