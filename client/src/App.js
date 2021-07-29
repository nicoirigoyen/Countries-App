import './App.css';
import React  from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NewActivity from "./components/Activities/NewActivities"
import CardDetail from "./components/Home/CardDetail/CardDetail"



function App() {
  return (

      <BrowserRouter>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/countries/:id" component={CardDetail}/>
        <Route path="/activities" component={NewActivity}/>
        <Route path="/" component={Footer}></Route>
      </BrowserRouter>
  )
};

export default App;
