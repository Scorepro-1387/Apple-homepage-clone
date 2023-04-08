import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";import './style.css';
import { BsApple, BsBag } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { signInWithGoogle } from './firebase.js';
import { BsBox } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

function NavigationBar(){
    const [NavColor, setNavColor] = useState("#38383aec");
    const [openStore, setOpenStore] = useState(false);
    const [openMac, setOpenMac] = useState(false);
    const [openIpad, setOpenIpad] = useState(false);
    const [openIphone, setOpenIphone] = useState(false);
    const [openWatch, setOpenWatch] = useState(false);
    const [openAirpods, setOpenAirpods] = useState(false);
    const [openTVHOME, setOpenTVHOME] = useState(false);
    const [openEntertainment, setOpenEntertainment] = useState(false);
    const [openAccessories, setOpenAccessories] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);
    const [openBag, setOpenBag] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const StoreDropDown = () => {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-11px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenStore(!openStore)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Shop</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Shop the latest</h3>
                            <h3 className="ddttletext">Mac</h3>
                            <h3 className="ddttletext">iPad</h3>
                            <h3 className="ddttletext">iPhone</h3>
                            <h3 className="ddttletext">Apple Watch</h3>
                            <h3 className="ddttletext">Accessories</h3>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Quick Links</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Find a store</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Mac</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPad</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPhone</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Watch</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Accessories</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop Special Stores</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Certified Refurbished</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Education</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Business</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Veterans and Military</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Goverment</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function MacDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-11px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenMac(!openMac)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore Mac</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore All Mac</h3>
                            <h3 className="ddttletext">MacBook Air</h3>
                            <h3 className="ddttletext">MacBook Pro</h3>
                            <h3 className="ddttletext">iMac</h3>
                            <h3 className="ddttletext">Mac mini</h3>
                            <h3 className="ddttletext">Mac Studio</h3>
                            <h3 className="ddttletext">Mac Pro</h3>
                            <h3 className="ddttletext">Mac Displays</h3>
                            <h5 className="ddttletext">Compare Mac</h5>
                            <h5 style={{marginTop: "-15px"}} className="ddttletext">Mac Does That</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop Mac</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop Mac</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Mac Accessories</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Financing</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Trade in</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from Mac</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Mac Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">macOS Ventura</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Continuity</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iCloud</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Mac for Business</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Education</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function IpadDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenIpad(!openIpad)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore iPad</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore All iPad</h3>
                            <h3 className="ddttletext">iPad Air</h3>
                            <h3 className="ddttletext">iPad Pro</h3>
                            <h3 className="ddttletext">iPad</h3>
                            <h3 className="ddttletext">iPad mini</h3>
                            <h3 className="ddttletext">Apple Pencil</h3>
                            <h3 className="ddttletext">Keyboards</h3>
                            <h5 className="ddttletext">Compare iPad</h5>
                            <h5 style={{marginTop: "-15px"}} className="ddttletext">Why iPad</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop iPad</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop iPad</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPad Accessories</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Financing</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Trade in</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from iPad</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPad Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPadOS 16</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iCloud</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Education</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function IPhoneDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenIphone(!openIphone)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore iPhone</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore All iPhone</h3>
                            <h3 className="ddttletext">iPhone 14 Pro</h3>
                            <h3 className="ddttletext">iPhone 14</h3>
                            <h3 className="ddttletext">iPhone 13</h3>
                            <h3 className="ddttletext">iPhone 12</h3>
                            <h3 className="ddttletext">iPhone SE</h3>
                            <h5 className="ddttletext">Compare iPhone</h5>
                            <h5 style={{marginTop: "-15px"}} className="ddttletext">Switch to iPhone</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop iPhone</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop iPhone</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPhone Accessories</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Trade in</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Carrier Deals at Apple</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Financing</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from iPhone</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPhone Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iOS 16</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iPhone Privacy</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">iCloud</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Wallet, Pay, Card</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Siri</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function WatchDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenWatch(!openWatch)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore Watch</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore All Watch</h3>
                            <h3 className="ddttletext">Apple Watch Ultra</h3>
                            <h3 className="ddttletext">Apple Watch Series 8</h3>
                            <h3 className="ddttletext">Apple Watch SE</h3>
                            <h3 className="ddttletext">Apple Watch Nike</h3>
                            <h3 className="ddttletext">Apple Watch Hermès</h3>
                            <h5 className="ddttletext">Compare Watch</h5>
                            <h5 style={{marginTop: "-15px"}} className="ddttletext">Why Apple Watch</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop Watch</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop Apple Watch</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Watch Studio</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Watch Bands</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Watch Accessories</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Financing</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Trade in</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from Watch</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Watch Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">watchOS 9</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Fitness+</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function AirpodDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenAirpods(!openAirpods)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore AirPods</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore All AirPods</h3>
                            <h3 className="ddttletext">AirPods 2nd generation</h3>
                            <h3 className="ddttletext">AirPods 3rd generation</h3>
                            <h3 className="ddttletext">AirPods Pro 2nd generation</h3>
                            <h3 className="ddttletext">AirPods Max</h3>
                            <h5 className="ddttletext">Compare AirPods</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop AirPods</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop Apple AirPods</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">AirPods Accessories</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from AirPods</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">AirPods Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Music</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function TVNHOMEdropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenTVHOME(!openTVHOME)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore TV & Home</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore TV & Home</h3>
                            <h3 className="ddttletext">Apple TV 4k</h3>
                            <h3 className="ddttletext">HomePod</h3>
                            <h3 className="ddttletext">HomePod mini</h3>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Shop TV & Home</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop Apple TV 4k</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop HomePod</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop HomePod mini</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Shop Siri Remote</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">TV & Home Accessories</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>More from TV & Home</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple TV Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">HomePod Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple TV app</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple TV+</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Home app</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Music</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Siri</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">AirPlay</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function EntertainmentDropDown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenEntertainment(!openEntertainment)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore Entertainment</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Explore Entertainment</h3>
                            <h3 className="ddttletext">Apple One</h3>
                            <h3 className="ddttletext">Apple TV+</h3>
                            <h3 className="ddttletext">Apple Music</h3>
                            <h3 className="ddttletext">Apple Arcade</h3>
                            <h3 className="ddttletext">Apple Fitness+</h3>
                            <h3 className="ddttletext">Apple News+</h3>
                            <h3 className="ddttletext">Apple Podcasts</h3>
                            <h3 className="ddttletext">Apple Books</h3>
                            <h3 className="ddttletext">App Store</h3>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Support</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple TV+ Support</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple Music Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function AccessoriesDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenAccessories(!openAccessories)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Shop Accessories</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">Shop All Accessories</h3>
                            <h3 className="ddttletext">Mac</h3>
                            <h3 className="ddttletext">iPad</h3>
                            <h3 className="ddttletext">iPhone</h3>
                            <h3 className="ddttletext">Apple Watch</h3>
                            <h3 className="ddttletext">AirPods</h3>
                            <h3 className="ddttletext">TV & Home</h3>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Explore Accessories</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Made by Apple</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Beats by Dr. Dre</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">AirTag</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function SupportDropdown() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176"}}>
                        <p onClick={() => {
                            setOpenSupport(!openSupport)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default", fontSize: "13px"}}>Explore Support</p>
                        <div style={{color: "#fff"}}>
                            <h3 className="ddttletext">iPhone</h3>
                            <h3 className="ddttletext">Mac</h3>
                            <h3 className="ddttletext">iPad</h3>
                            <h3 className="ddttletext">Watch</h3>
                            <h3 className="ddttletext">AirPods</h3>
                            <h3 className="ddttletext">Music</h3>
                            <h3 className="ddttletext">TV</h3>
                            <h5 className="ddttletext">Explore Support</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Get Help</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Community</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Check Coverage</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Repair</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Contact Us</h5>
                        </div>
                    </div>
                    <div style={{marginLeft: "50px",marginTop: "0px"}}>
                        <p style={{
                            color: "#09090A",
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white",visibility: "hidden"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <p style={{cursor: "default",color:"#717176", fontSize: "13px"}}>Helpful Topics</p>
                        <div style={{color: "#fff"}}>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Get AppleCare+</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Apple ID & Password</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Billing & Subscriptions</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Find My</h5>
                            <h5 style={{
                                marginBottom:"-15px"
                            }}className="ddttletext">Accessibility</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function Cart() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-11px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176",marginBottom:"80px"}}>
                        <p onClick={() => {
                            setOpenBag(!openBag)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <div className="bag" style={{color: "#fff"}}>
                            <h3 className="ddttletext">Your bag is empty</h3>
                            <h5 className="ddttletex" style={{color: "#717176",cursor:"default"}}><p
                            style={{
                                color: "#188CFF",
                                textDecoration: "underline",
                                cursor:"pointer"
                            }} onClick={() => signInWithGoogle()}
                            >Sign in</p> to
                            see if you have any saved items</h5>
                            <p style={{marginTop:"30px",cursor: "default",color:"#717176", fontSize: "13px"}}>Get Help</p>
                            <div style={{color: "#fff",marginTop:"-10px"}}>
                                <h5 style={{
                                    marginBottom:"-15px",
                                    display: "flex"
                                }}className="ddttletext"><div  style={{
                                    marginRight:"7px",
                                    color:"#717176",
                                    marginBottom:"10px"
                                }}><BsBox size={10}/></div>Orders</h5>
                                <h5 style={{
                                    marginBottom:"-15px",
                                    display: "flex"
                                }}className="ddttletext"><div style={{
                                    marginRight:"7px",
                                    color:"#717176",
                                    marginBottom:"10px"
                                }}><BsBookmark size={10}/></div>Your Saves</h5>
                                <h5 style={{
                                    marginBottom:"-5px",
                                    display: "flex",
                                }}className="ddttletext"><div style={{marginRight: "5px"}}><BsGearWideConnected size={10}/></div>Accounts</h5>
                                <h5 onClick={() => signInWithGoogle()} style={{
                                    marginBottom:"-15px",
                                    display: "flex",
                                }}className="ddttletext"><div  style={{
                                    marginRight:"7px",
                                    color:"#717176",
                                }}><IoPersonCircleOutline size={10}/></div>Sign in</h5>
                                <div>
                                    <div style={{marginTop: "40px"}}>
                                        <h5 style={{
                                            cursor: "default",
                                            display: "flex"
                                        }}
                                        ><div style={{marginRight:"5px",marginBottom:"0px"}}><BsApple/></div>{localStorage.getItem("name")}</h5>
                                        <h5 style={{marginTop: "-3px"}}>{localStorage.getItem("email")}</h5>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function SearchFunction(props:any) {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176",marginBottom:"80px"}}>
                        <p onClick={() => {
                            setOpenSearch(!openSearch)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <div className="bag" style={{color: "#fff"}}>
                            <div>
                                <BsSearch/>
                                <input className="searchbox"type="text" placeholder="Search apple.com" style={{
                                    padding: "10px",
                                    fontSize: "20px",
                                    backgroundColor: "transparent"
                                }}></input>
                            </div>
                            <div style={{color: "#fff",marginTop:"-10px"}}>
                                <div>
                                    <div style={{marginTop: "40px"}}>
                                        <h5>Press enter when done typing</h5>
                                        <h5 style={{
                                            cursor: "default"
                                        }}
                                        ><div style={{marginRight:"5px",marginBottom:"-2px"}}><BsApple/></div>{localStorage.getItem("name")}</h5>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }
    function HotodgMenu() {
        return(
            <div>
                <div className="dropdownparent" style={{
                width: "100%",
                backgroundColor: "#09090A",
                marginTop: "-12px",
                minWidth: "200vh",
                padding: "40px",

            }}>
                <div className="conent-parent" style={{display: "flex"}}>
                    <div className="Title1" style={{color:"#717176",marginBottom:"80px"}}>
                        <p onClick={() => {
                            setOpenMenu(!openMenu)
                            setNavColor("#38383aec")
                        }} style={{
                            cursor: "pointer"
                        }}
                        ><div style={{color: "white"}}><AiOutlineCloseCircle size={20}/></div></p>
                        <div className="bag" style={{color: "#fff"}}>
                            <div>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Store</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Mac</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>iPad</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>iPhone</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Watch</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>AirPods</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>TV & Home</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Entertainment</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Accessories</h2>
                                <h2 className="HamburgurMenuText" style={{cursor: "pointer"}}>Support</h2>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="blurrbg">
            </div>
            </div>
        );
    }

    return (
        <div className="main-view" style={{position: "fixed"}} >
            <div className="navbar" style={{backgroundColor: NavColor}}>
                <div className="elements">
                    <div className="components">
                        <p style={{marginTop:"0",marginBottom: "0"}} className="logos"><AiFillApple size={19}/></p>
                        <div className="letters-main">
                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenStore(!openStore)
                                setOpenBag(false)
                                setOpenMac(false)
                                setOpenMenu(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenSearch(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openStore === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Store</p>

                            <p style={{marginTop:"0",marginBottom: "0"}}  className="letters"
                            onClick={() => {
                                setOpenMac(!openMac)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMenu(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenSearch(false)
                                setOpenWatch(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openMac === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Mac</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenIpad(!openIpad)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenMenu(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSearch(false)
                                setOpenSupport(false)
                                if (openIpad === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >iPad</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenIphone(!openIphone)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenWatch(false)
                                setOpenMenu(false)
                                setOpenAirpods(false)
                                setOpenSearch(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openIphone === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >iPhone</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenWatch(!openWatch)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenSearch(false)
                                setOpenAirpods(false)
                                setOpenMenu(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openWatch === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Watch</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenAirpods(!openAirpods)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenMenu(false)
                                setOpenSearch(false)
                                setOpenWatch(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openAirpods === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >AirPods</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenTVHOME(!openTVHOME)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenMenu(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenSearch(false)
                                setOpenAirpods(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openTVHOME === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >TV & Home</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenEntertainment(!openEntertainment)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenSearch(false)
                                setOpenWatch(false)
                                setOpenAirpods(false)
                                setOpenMenu(false)
                                setOpenTVHOME(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openEntertainment === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Entertainment</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="letters"
                            onClick={() => {
                                setOpenAccessories(!openAccessories)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenSearch(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenMenu(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenSupport(false)
                                if (openAccessories === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Accessories</p>

                            <p style={{marginTop:"0",marginBottom: "0"}} className="lettersS"
                            onClick={() => {
                                setOpenSupport(!openSupport)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenMenu(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenAirpods(false)
                                setOpenSearch(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                if (openSupport === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                            >Support</p>
                        </div>
                        <p className="logossss" style={{marginTop: "0px",marginBottom:"0"}}
                        onClick={() => {
                                setOpenSearch(!openSearch)
                                setOpenSupport(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenMenu(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenWatch(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenBag(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                if (openSearch === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}><AiOutlineSearch size={19}/></p>
                        <p style={{marginTop:"0",marginBottom: "0"}} onClick={() => {
                                setOpenAirpods(false)
                                setOpenMenu(!openMenu)
                                setOpenBag(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenSearch(false)
                                setOpenWatch(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenAccessories(false)
                                setOpenSupport(false)
                                if (openMenu === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}><div className="hammenu" style={{marginRight: "-20px",marginTop: "1px"}}><HiOutlineMenuAlt4 size={18}/></div></p>
                        <p className="logosss" style={{marginTop: "2px",marginBottom:"0",cursor: "pointer"}}
                        onClick={() => {
                                setOpenBag(!openBag)
                                setOpenSupport(false)
                                setOpenStore(false)
                                setOpenMac(false)
                                setOpenIpad(false)
                                setOpenIphone(false)
                                setOpenSearch(false)
                                setOpenWatch(false)
                                setOpenAirpods(false)
                                setOpenTVHOME(false)
                                setOpenEntertainment(false)
                                setOpenMenu(false)
                                setOpenAccessories(false)
                                if (openBag === true){
                                    setNavColor("#38383aec")
                                }else {
                                    setNavColor("#09090A")
                                }
                            }}
                        ><BsBag size={15}/></p>
                    </div>
                </div>
            </div>
            {openStore && <StoreDropDown/>}
            {openMac && <MacDropdown/>}
            {openIpad && <IpadDropdown/>}
            {openIphone && <IPhoneDropdown/>}
            {openWatch && <WatchDropdown/>}
            {openAirpods && <AirpodDropdown/>}
            {openTVHOME && <TVNHOMEdropdown/>}
            {openEntertainment && <EntertainmentDropDown/>}
            {openAccessories && <AccessoriesDropdown/>}
            {openSupport && <SupportDropdown/>}
            {openSearch && <SearchFunction/>}
            {openBag && <Cart/>}
            {openMenu && <HotodgMenu/>}
        </div>
    );
}

export default NavigationBar