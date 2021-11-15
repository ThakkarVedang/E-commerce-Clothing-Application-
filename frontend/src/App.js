import './App.css';
import Header from './component/layout/Header/Header.js';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Webfont from "webfontloader";
import React  from "react";
import Footer from "./component/layout/footer/footer.js";
import Home from "./component/Home/Home.js";


function App() {
  React.useEffect(()=>
{
  Webfont.load({
    google:{
      families:["Roboto","Droid Sans","Chilanka"]
    }
  });
},[]);

  

  return (
  <Router>
  <div>
  <Header />
  <Route exact path="/" component={Home} />
  <Footer />
  </div>
  
  </Router>
  );
  
}


export default App;
