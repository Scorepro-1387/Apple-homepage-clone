import React, { useState } from "react";
import './Largestyle.css';
import { BsArrowRightShort } from "react-icons/bs";

function Normaliphone(){
    const BlackIphone = require('./whitephone.png');

    return(
        <div className="main-parent" style={{backgroundColor: "#F9F9F9",paddingBottom:"50px"}}>
            <div className="skeleton">
                <div className="main-text-div">
                    <h1 className="titleoftheslide" style={{color: "#000"}}>iPhone 14</h1>
                    <h1 style={{
                        color: "#000",textAlign: "center", 
                        marginTop: "-40px", fontWeight: "150"
                    }}>Two great sizes.<br/>Now with a splash of yellow</h1>
                    <div className="links" style={{color: "#1781E9",display: "flex"}}>
                        <div style={{marginRight: "5px",display: "flex", cursor: "pointer"}}>
                            <h3 className="learnmore">Learn more</h3>
                            <div style={{marginTop: "15px"}}>
                                <BsArrowRightShort size={30}/>
                            </div>
                        </div>
                        <div style={{display: "flex",cursor: "pointer"}}>
                            <h3 className="buy">Buy</h3>
                            <div style={{marginTop: "15px"}}>
                                <BsArrowRightShort size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-image-divss">
                    <img draggable="false" id="heu" className="showcaseslidelargeiamge" src={BlackIphone}/>
                </div>
            </div>
        </div>
    );
}

export default Normaliphone