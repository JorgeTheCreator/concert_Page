import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Button from "../button/Button"


class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {

        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        }, 30);
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.percentage()}
                        bottom>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 25th of May</h3>
                            <p>When it comes to fares and fees, we don't want there to be any unwanted surprises. Take the time to read through this section, so you know exactly what fees you can expect—and even better, what fees you can avoid altogether.</p>
                            <Button
                              text="Purchase Tickets"
                              bck = "#ffa800"
                              color = "#ffffff"
                              link = "https://seatgeek.com/ariana-grande-tickets"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        );
    };
};

export default Discount;