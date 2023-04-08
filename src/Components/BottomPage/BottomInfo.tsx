import React, {useState} from "react";
import './style.css';
import { AiOutlinePlus } from "react-icons/ai";

function ShopandLearn(){
    return(
        <div className="shopandlearndropdownmain">
            <p>Store</p>
            <br/>
            <p>Mac</p>
            <br/>
            <p>iPad</p>
            <br/>
            <p>iPhone</p>
            <br/>
            <p>Watch</p>
            <br/>
            <p>AirPods</p>
            <br/>
            <p>TV & Home</p>
            <br/>
            <p>AirTag</p>
            <br/>
            <p>Accessories</p>
            <br/>
            <p>Gift Cards</p>
            <br/>
        </div>
    );
}
function AppleWallet(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Wallet</p>
            <br/>
            <p>Apple Card</p>
            <br/>
            <p>Apple Pay</p>
            <br/>
            <p>Apple Cash</p>
        </div>
    );
}
function AccountDropdown(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Manage Your Apple ID</p>
            <br/>
            <p>Apple Store Account</p>
            <br/>
            <p>iCloud.com</p>
        </div>
    );
}
function Entertainment(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Apple One</p>
            <br/>
            <p>Apple TV+</p>
            <br/>
            <p>Apple Music</p>
            <br/>
            <p>Apple Arcade</p>
            <br/>
            <p>Apple Fitness+</p>
            <br/>
            <p>Apple News+</p>
            <br/>
            <p>Apple Podcasts</p>
            <br/>
            <p>Apple Books</p>
            <br/>
            <p>Apple Cash</p>
            <br/>
            <p>Apple Store</p>
        </div>
    );
}
function Appstore(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Find a Store</p>
            <br/>
            <p>Genius Bar</p>
            <br/>
            <p>Today at Apple</p>
            <br/>
            <p>Apple Camp</p>
            <br/>
            <p>Apple Store App</p>
            <br/>
            <p>Certified Refurbished</p>
            <br/>
            <p>Apple Trade In</p>
            <br/>
            <p>Financing</p>
            <br/>
            <p>Carrier Deals at Apple</p>
            <br/>
            <p>Order Status</p>
            <br/>
            <p>Shopping Help</p>
        </div>
    );
}
function Busi(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Apple and Business</p>
            <br/>
            <p>Shop for Business</p>
        </div>
    );
}
function Education(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Apple and Education</p>
            <br/>
            <p>Shop for K-12</p>
            <br/>
            <p>Shop for Collage</p>
        </div>
    );
}
function Health(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Apple in Healthcare</p>
            <br/>
            <p>Health on Apple Watch</p>
            <br/>
            <p>Health Records on iPhone</p>
        </div>
    );
}
function Gov(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Shop for Goverment</p>
            <br/>
            <p>Shop for Veterans and Military</p>
        </div>
    );
}
function Value(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Accessibility</p>
            <br/>
            <p>Education</p>
            <br/>
            <p>Enviroment</p>
            <br/>
            <p>Inclusion and Diversity</p>
            <br/>
            <p>Privacy</p>
            <br/>
            <p>Racial Equality and Justice</p>
            <br/>
            <p>Supplier Responsibility</p>
        </div>
    );
}
function Abt(){
    return(
        <div className="shopandlearndropdownmain" style={{marginBottom:"20px"}}>
            <p>Newsroom</p>
            <br/>
            <p>Apple Leadership</p>
            <br/>
            <p>Career Opportunities</p>
            <br/>
            <p>Investors</p>
            <br/>
            <p>Ethics & Compliance</p>
            <br/>
            <p>Events</p>
            <br/>
            <p>Contanct Apple</p>
        </div>
    );
}

function BottomInfo(){
    const [shopandlearn, setShopandLearn] = useState(false);
    const [applewallet, setAppleWallet] = useState(false);
    const [Account, setAccount] = useState(false);
    const [Entert, setEntertain] = useState(false);
    const [AppleStore, setAppleStore] = useState(false);
    const [Business, setBusienss] = useState(false);
    const [edu, setEdu] = useState(false);
    const [Healthcare, setHealtcare] = useState(false);
    const [Goverment, setGoverment] = useState(false);
    const [val, setVal] = useState(false);
    const [abtApple, setAbtApple] = useState(false);

    return(
        <div className="main-div" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F4F4F6",
            paddingBottom:"100px",
            paddingLeft:"20px",
            paddingRight:"20px",
        }}>
            <div className="skeleton" style={{
                    maxWidth: "987px",
                    color: "#7B7B80",
                    fontSize: "12px",
                    minWidth: "200px"
                }}>
                <div className="upper-half">
                    <p>1. Trade-in values will vary based on the condition, year, 
                        and configuration of your eligible trade-in device. Not 
                        all devices are eligible for credit. You must be at least 
                        18 years old to be eligible to trade in for credit or for
                        an Apple Gift Card. Trade-in value may be applied toward 
                        qualifying new device purchase, or added to an Apple Gift 
                        Card. Actual value awarded is based on receipt of a qualifying 
                        device matching the description provided when estimate was made. 
                        Sales tax may be assessed on full value of a new device purchase. 
                        In-store trade-in requires presentation of a valid photo ID 
                        (local law may require saving this information). 
                        Offer may not be available in all stores, and may vary between 
                        in-store and online trade-in. Some stores may have additional requirements. 
                        Apple or its trade-in partners reserve the right to refuse or limit quantity 
                        of any trade-in transaction for any reason. More details are available from 
                        Apple’s trade-in partner for trade-in and recycling of eligible devices. 
                        Restrictions and limitations may apply.
                    </p>
                    <p>
                        2. Compared to AirPods Pro (1st generation).
                    </p>
                    <p>
                        To access and use all the features of Apple Card, you must add Apple Card to Wallet 
                        on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest 
                        version by going to Settings - General - Software Update. Tap Download and Install.
                    </p>
                    <p>
                        Available for qualifying applicants in the United States.
                    </p>
                    <p>
                        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                    <p>
                        Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
                    </p>
                    <p>
                        A subscription is required for Apple TV+.
                    </p>
                    <p>
                        Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.
                    </p>
                </div>
                <hr/>
                <div className="lower-half">
                    <div className="first-resort">
                        <div className="parent-div">
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Shop and Learn</h4>
                                <br/>
                                <p>Store</p>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>TV & Home</p>
                                <p>AirTag</p>
                                <p>Accessories</p>
                                <p>Gift Cards</p>
                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Apple Wallet</h4>
                                <br/>
                                <p>Store</p>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>TV & Home</p>
                                <p>AirTag</p>
                                <p>Accessories</p>
                                <p>Gift Cards</p>
                            </p>
                        </div>
                        <div className="parent-div">
                             <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Account</h4>
                                <br/>
                                <p>Manage Your Apple ID</p>
                                <p>Apple Store Account</p>
                                <p>iCloud.com</p>
                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Entertainment</h4>
                                <br/>
                                <p>Apple One</p>
                                <p>Apple TV+</p>
                                <p>Apple Music</p>
                                <p>Apple Arcade</p>
                                <p>Apple Fitness+</p>
                                <p>Apple News+</p>
                                <p>Apple Podcasts</p>
                                <p>Apple Books</p>
                                <p>Apple Store</p>
                            </p>
                        </div>
                        <div className="parent-div">
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Apple Store</h4>
                                <br/>
                                <p>Find a Store</p>
                                <p>Genius Bar</p>
                                <p>Today at Apple</p>
                                <p>Apple Camp</p>
                                <p>Apple Store App</p>
                                <p>Certified Refurbished</p>
                                <p>Apple Trade in</p>
                                <p>Financing</p>
                                <p>Carrier Deals at Apple</p>
                                <p>Order Status</p>
                                <p>Shopping Help</p>
                            </p>
                        </div>
                        <div className="parent-div">
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>For Business</h4>
                                <br/>
                                <p>Apple and Businesses</p>
                                <p>Shop for Businesses</p>
                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>For Education</h4>
                                <br/>
                                <p>Apple and Education</p>
                                <p>Shop for K-12</p>
                                <p>Shop for Collage</p>
                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>For Healthcare</h4>
                                <br/>
                                <p>Apple in Healthcare</p>
                                <p>Health on Apple Watch</p>
                                <p>Health Records on iPhone</p>
                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>For Goverment</h4>
                                <br/>
                                <p>Shop for Goverment</p>
                                <p>Shop for Vetarens and<br/>Military</p>
                            </p>
                        </div>

                        <div className="parent-div">
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>Values</h4>
                                <br/>
                                <p>Accessibility</p>
                                <p>Education</p>
                                <p>Enviroment</p>
                                <p>Inclusion and Diversity</p>
                                <p>Privacy</p>
                                <p>Racial Equality and Justice</p>
                                <p>Supplier Responsibility</p>

                            </p>
                            <p className="lowerhalf-children">
                                <h4 style={{marginBottom: "-10px",fontWeight:"bold",cursor: "default"}}>About Apple</h4>
                                <br/>
                                <p>Newsroom</p>
                                <p>Apple Leadership</p>
                                <p>Career Opportunities</p>
                                <p>Investors</p>
                                <p>Ethics & Compliance</p>
                                <p>Events</p>
                                <p>Contact Apple</p>
                            </p>
                        </div>                
                    </div>
                    <div className="last-resort" style={{color: "#19191B"}}>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setShopandLearn(!shopandlearn)}><AiOutlinePlus/> Shop and Learn</p>
                            {shopandlearn && <ShopandLearn/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setAppleWallet(!applewallet)}><AiOutlinePlus/> Apple Wallet</p>
                            {applewallet && <AppleWallet/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setAccount(!Account)}><AiOutlinePlus/> Account</p>
                            {Account && <AccountDropdown/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setEntertain(!Entert)}><AiOutlinePlus/> Entertainment</p>
                            {Entert && <Entertainment/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setAppleStore(!AppleStore)}><AiOutlinePlus/> Apple Store</p>
                            {AppleStore && <Appstore/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setBusienss(!Business)}><AiOutlinePlus/> For Business</p>
                            {Business && <Busi/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setEdu(!edu)}><AiOutlinePlus/> For Education</p>
                            {edu && <Education/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setHealtcare(!Healthcare)}><AiOutlinePlus/> For Healthcare</p>
                            {Healthcare && <Health/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setGoverment(!Goverment)}><AiOutlinePlus/> For Goverment</p>
                            {Goverment && <Gov/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setVal(!val)}><AiOutlinePlus/> Apple Values</p>
                            {val && <Value/>}
                        </div>
                        <hr/>
                        <div>
                            <p style={{cursor: "pointer"}} onClick={() => setAbtApple(!abtApple)}><AiOutlinePlus/> About Apple</p>
                            {abtApple && <Abt/>}
                        </div>
                        <hr/>
                    </div>
                    <p style={{marginTop: "40px"}}>This CLONE was made entirely by Salar Hashemian</p>
                </div>
            </div>
        </div>
    );
}

export default BottomInfo