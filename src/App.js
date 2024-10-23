import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { Link } from "react-router-dom";
//  import { Route } from "react-router-dom";
 import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Page1></Page1> */}
     
     <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/playNow" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
