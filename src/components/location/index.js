import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2798092953367!2d-97.73342478487918!3d30.286094981794967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b590062b53fd%3A0x1b2142c252e84095!2sBass+Concert+Hall!5e0!3m2!1sen!2sus!4v1534898819113" 
            width="100%" 
            height="500px" 
            frameBorder="0"    
            allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;