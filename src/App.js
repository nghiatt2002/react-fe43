import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBiding from './DataBiding/DataBiding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      <DataBiding />
    </div>
  );
}

export default App;
