import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBiding from './DataBiding/DataBiding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BTChonXe from './RenderWithState/BTChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBiding /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BTChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
