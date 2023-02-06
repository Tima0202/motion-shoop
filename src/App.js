
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={"/Header"} element={<Header/>}/>
          <Route path={'/Footer'} element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;
