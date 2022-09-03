import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">Designing</h6>
                                                    <ProgressBar now={95} />
                                                    <span className="label">95%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Managment</h6>
                                                    <ProgressBar now={85} />
                                                    <span className="label">85%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Marketing</h6>
                                                    <ProgressBar now={75} />
                                                    <span className="label">75%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Development</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Sr. Front-end Engineer<span> - Google</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009
                                               </li>
                                               <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li>
                                               <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;