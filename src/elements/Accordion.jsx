import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { FiCheck } from "react-icons/fi";

class Accordion01 extends Component {
    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
        ];

        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Your Business Skills But Never Stop Improving.
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemOne.map((name, index) => {
                                return <li key={ index }><FiCheck /> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Tactics That Can Help Your Business Grow.
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemOne.map((name, index) => {
                                return <li key={ index }> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            The Secret of Successful Business
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Ad aliquam dicta enim excepturi explicabo in ipsum iste iure natus perferendis placeat quae similique tempore totam veniam vero! Ad aliquam dicta enim excepturi explicabo in ipsum iste iure natus perferendis placeat quae similique tempore totam veniam vero!
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How To Start A Business With Business
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemOne.map((name, index) => {
                                return <li key={ index }><FiCheck /> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        )
    }
}

export default Accordion01;





