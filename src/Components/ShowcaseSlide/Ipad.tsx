import React, { useState } from "react";
import './Largestyle.css';
import { BsArrowRightShort } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

function Ipad(){
    const BlackIphone = require('./Ipad.png');

    return(
        <div className="main-parent" style={{backgroundColor: "#FBFBFB",paddingTop: "30px",paddingBottom:"70px"}}>
            <div className="skeleton">
                <div className="main-text-div">
                    <h1 className="titleoftheslide" style={{color: "#000"}}>iPad</h1>
                    <h1 style={{
                        color: "#000",textAlign: "center", 
                        marginTop: "-40px", fontWeight: "150"
                    }}>Loveable. Drawable. Magical</h1>
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
                    <div className="main-image-div" style={{marginRight: "-5px",marginTop:"-60px"}}>
                        <img draggable="false" className="showcaseslidelargeiamge" src={BlackIphone}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ipad;