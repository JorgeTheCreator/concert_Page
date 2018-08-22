import React, { Component } from 'react';
import MyButton from "../button/Button"; 


import Zoom from "react-reveal/Zoom";


class Pricing extends Component {

    state = {
        prices:[100, 200,350],
        position: ['Balcony','Medium','Star'],
        desc : [
            "The Ariana Grande Tickets prices are different for every show on the road trip.",
            "The maximum average ticket price is $402 whereas the lowest average ticket price is $173.",
            "This is your chance to watch her perform live."
        ],
        link: [
            "https://seatgeek.com/checkout?market=fanxchange&event_id=4483039&listing_id=1316766672&is_quantity_specified=true&quantity=2&click_id=88496072&dq=-1&sl=&origin=site&fbp=true&sgp=540.58",
            "https://www.tickpick.com/checkout?listingId=1227902_b132&quantity=8&listingType=TP&price=636&dt=p&dv=0&e=3659899",
            "https://seatgeek.com/checkout?market=fanxchange&event_id=4483038&listing_id=1229159826&is_quantity_specified=true&quantity=2&click_id=88496470&dq=86.73&map_key=s%3Aorchestra-center+r%3Aa&sl=&origin=site&fbp=true&sgp=1265.85"

        ],
        delay:["500","0","500"]

    }

    showBoxes =() => (
        this.state.prices.map((box,i)=>(
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.position[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                         <MyButton
                            text = "purchase"
                            bck ="#ffa800"
                            color= "#ffffff"
                            link={this.state.link[i]}

                         />
                    </div>
                </div>
            </div>
            </Zoom>
            
        ))
    )


    render() {
        return (
            <div className="bck_black">
               <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper"> 
                        {this.showBoxes()}
                    </div>
               </div>
            </div>
        );
    }
}

export default Pricing;