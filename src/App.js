import React from 'react';
import './App.css';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBiding from './DataBiding/DataBiding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BTChonXe from './RenderWithState/BTChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapBanKinh from './RenderWithState/BaiTapBanKinh';
import DemoProps from './Props/DemoProps';
import ExampleCard from './LiftingUpState/ExampleCard';
import BTGioHangRedux from './BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BTBurger from './BaiTapRedux/BaiTapBurger/BTBurger';
import GameBauCua from './BaiTapRedux/GameBauCua';
import GameTaiXiu from './BaiTapRedux/GameTaiXiu';
import BaiTapQLSV from './BaiTapRedux/BaiTapQLSV';
import ReactLifeCircle from './ReactLifeCircle/ReactLifeCircle';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBiding /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BTChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapBanKinh /> */}
      {/* <DemoProps /> */}
      {/* <ExampleCard /> */}
      {/* <BTGioHangRedux /> */}
      {/* <BTBurger /> */}
      {/* <GameBauCua /> */}
      {/* <GameTaiXiu /> */}
      <BaiTapQLSV />
      {/* <ReactLifeCircle /> */}
    </div>
  );
}

export default App;
