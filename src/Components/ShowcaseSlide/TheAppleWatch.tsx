import React, { useState } from "react";
import './Largestyle.css';
import { BsArrowRightShort } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

function AppleWatch(props:any){
    const BlackIphone = require('./applewatch.png');

    return(
        <div className="main-parent" style={{backgroundColor: "#000",marginTop: "10px",paddingBottom:"35px"}}>
            <div className="skeleton">
                <div className="main-text-div">
                    <h1 className="titleoftheslide" style={{color: "#fff"}}><BsApple/> WATCH</h1>
                    <h1 style={{
                        color: "#fff",textAlign: "center", 
                        marginTop: "-40px", fontWeight: "150"
                    }}><p style={{
                        marginBottom: "-25px",
                        fontSize: "23px",
                        color: "#C61117"
                    }}>SERIES 8</p><br/>A healthy leap ahead.</h1>
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
                <div className="main-image-div">
                    <img draggable="false" className="showcaseslidelargeiamge" src={BlackIphone}/>
                </div>
            </div>
        </div>
    );
}

export default AppleWatch;