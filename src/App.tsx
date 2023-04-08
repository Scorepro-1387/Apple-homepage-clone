import React from 'react';
import BottomInfo from './Components/BottomPage/BottomInfo';
import NavigationBar from './Components/Navigation/NavBar';
import AppleCard from './Components/ShowcaseSlide/AppleCard';
import Ipad from './Components/ShowcaseSlide/Ipad';
import IpadandWWDC from './Components/ShowcaseSlide/IpadandWWDC';
import Iphonepro from './Components/ShowcaseSlide/Iphonepro';
import AppleWatch from './Components/ShowcaseSlide/TheAppleWatch';
import Normaliphone from './Components/ShowcaseSlide/ThephoneN';

function App() {
  return (
    <div className="parent-of-all">
      <div className="mainpage" style={{marginTop:"55px"}}>
        <div className='div-for-navigation'>
          <NavigationBar/>
        </div>
        <div className='div-for-home-view'>
          <p style={{fontSize:"14px",textAlign: "center",cursor: "default"}}
          >(This is  a clone of the apple website made by by Salar Hashemian)</p>
        </div>
        <Iphonepro/>
        <Normaliphone/>
        <AppleWatch/>
        <Ipad/>
        <IpadandWWDC/>
        <AppleCard/>
        <BottomInfo/>
      </div>
    </div>
  );
}

export default App;
