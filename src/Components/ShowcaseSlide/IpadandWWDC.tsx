import React, { useState } from "react";
import './Largestyle.css';
import { BsArrowRightShort } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

function IpadandWWDC(){
    const BlackIphone = require('./gradientbow.png');

    return(
        <div className="main-parent" style={{backgroundColor: "#000",paddingTop: "40px",paddingBottom:"10px"}}>
            <div className="skeleton">
                <div className="main-text-div">
                    <div className="main-image-div" style={{marginRight: "-5px"}}>
                        <img draggable="false" className="showcaseslidelargeiamge" src={BlackIphone}/>
                    </div>
                    <h1 className="titleoftheslide" style={{color: "#fff"}}><BsApple/> WWDC23</h1>
                    <h1 style={{
                        color: "#fff",textAlign: "center", 
                        marginTop: "-40px", fontWeight: "150"
                    }}><br/>Apple Worldwide Developers Conference.<br/> Join us online June 5-9.</h1>
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
            </div>
        </div>
    );
}

export default IpadandWWDC;