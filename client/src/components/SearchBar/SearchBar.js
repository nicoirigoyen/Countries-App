import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import Card from "../Home/Card/Card";
import "./SearchBar.css";

import { getNameCountry, orderPopu,orderContinent,ordering,getCountriesAct } from "../../redux/actions";


export default function SearchBar() {
  const [country, setCountry] = useState("");
  const [order, setOrder] = useState([]);
  const [orderpopu, setOrderpopu] = useState([]);
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry("");
    dispatch(getNameCountry(country));
  };
  useEffect(()=>{
    dispatch(orderContinent(filter))
  },[filter])
  useEffect(()=>{
    dispatch(ordering(order))
  },[order])
  useEffect(()=>{
    dispatch(orderPopu(orderpopu))
  },[orderpopu])

  const handleChange = (e)=>{
    e.preventDefault();
    setFilter("");
    setFilter(e.target.name = [e.target.value])
  }
  const handleChangeorder = (e)=>{
    e.preventDefault();
    setOrder("");
    setOrder(e.target.name = [e.target.value])
    console.log(order)
  }
  const handleChangepopu = (e)=>{
    e.preventDefault();
    setOrderpopu("");
    setOrderpopu(e.target.name = [e.target.value])
  }
  const handleCountriesAct = (e)=>{
    e.preventDefault();
    dispatch(getCountriesAct());

  }

  return (
 
    <div className='containerNavBar'>
      

   
    <form onSubmit={handleSubmit} className="formNavBar">
  
    
    {/* <button onClick={handleSubmit} className="button" type="submit">Buscar</button>  */}

  <div className="countainerSelectt">
    
    <input
      className="search"
      type="text"
      placeholder="Country..."
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
      
    <div className="countainerSelect">
      <label className='labelOrder'>Continente:</label>
      <select className='selectOrder' name='continent' onChange={(e) => {handleChange(e)}}>
        <option className='option'></option>
        <option className='option'>Africa</option>
        <option className='option'>Asia</option>
        <option className='option'>Americas</option>
        <option className='option'>Europe</option>
        <option className='option'>Oceania</option>
        <option className='option'>Polar</option>
      </select>
    </div>
    <div className="countainerSelect">
      <label className="labelOrder">Name: </label>
      <select className='selectOrder' name='order' onChange={(e) => {handleChangeorder(e)}}
      >
        <option className='option'></option>
        <option className='option'>ASC</option>
        <option className='option'>DESC</option>

      </select>
    </div>
    <div className="countainerSelect">
      <label className="labelOrder">Pupulation: </label>
      <select className='selectOrder' name='order' onChange={(e) => {handleChangepopu(e)}}
      >
        <option className='option'></option>
        <option className='option'>ASC</option>
        <option className='option'>DESC</option>

      </select>
    </div>
    
  </div>


  </form>
    {/* <div className="divcountriesAct">
      <label className="labelcountriesAct">Counties con Activities: </label>
      <button className="countriesAct" onClick={handleCountriesAct}>Countries by Activities</button>
  </div> */}

</div>
  )

}


