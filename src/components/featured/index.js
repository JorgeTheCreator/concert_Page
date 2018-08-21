import React from 'react';
import Carrousel from "./Carrousel";
import Fade from 'react-reveal/Fade';


import Countdown from "./Countdown";

const Featured = () => {
    return (
        <div style={{position:'relative'}}> 
            <Carrousel/>
            <div className="artist_name">
            <Fade  delay={1000} bottom>
                <div className="wrapper" >                  
                    Ariana  Grande   
                                       
                </div >
                </Fade>
            </div>
            <Countdown />
        </div>
    );
};

export default Featured;