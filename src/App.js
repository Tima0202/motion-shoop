
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import {Routes, Route} from "react-router-dom";
import ManPage from "./components/ManPage/ManPage";
import WomenPage from "./components/WomenPage/WomenPage";
import WinInfo from "./components/page/WinInfo/WinInfo";

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={"/Header"} element={<Header/>}/>
          <Route path={'/Footer'} element={<Footer/>}/>
          <Route path={'/ManPage'} element={<ManPage/>}/>
          <Route path={'/WomenPage'} element={<WomenPage/>}/>
          <Route path={'/WinInfo'} element={<WinInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
