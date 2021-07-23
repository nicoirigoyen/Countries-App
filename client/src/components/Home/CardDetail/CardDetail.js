import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry,getIdCountries,getCountries } from "../../../redux/actions/index";
import { useParams } from "react-router";
import Spinner from '../../Spinner'

import './CardDetail.css'
// import Card from "./Card/Card";



const CardDetail= ({Detail}) =>{ 
  let {id} = useParams();
  const [loading,setloading] = useState(false);
  const countryy = useSelector(store => store.country)
  const dispatch = useDispatch();
  

  useEffect(()=> {
    async function get(id) {await dispatch(getCountry(id)) 
    setloading(true)}
     get(id);
  },[id])


  return (
    <div>
  
     { 
        
        loading ?    <div className='container'>
        <div className="CardDetail">
            <h3 className="CardDetailName">{countryy.name}</h3>
            <img className='imageCard' src={countryy.image} alt='#'></img>
            <div className='InfoCard'>
                <p className='pActt'>Details: </p>
                <p>Code: {countryy.id}</p>
                <p>Continent: {countryy.continent}</p>
                <p>Capital: {countryy.capital}</p>
                <p>Subregion: {countryy.subregion}</p>
                <p>Area: {countryy.area}m2</p>
                <p>Population: {countryy.population}</p>
                <p className='spann'>-------------------------------------------------</p>
                <p className='pAct'>Activities: {countryy.activities.map((s) =>(
                  <div key={s.id}>
                    <p className='pActname'>Name: <span className='pActnamee'>{s.name}</span></p>
                    <p className='pActname'>Dificultty: {s.dificultty}</p>
                    <p className='pActname'>Duration: {s.duration}h</p>
                    <p className='pActname'>Season: {s.season}</p>
                    <span className='span'>-----------------</span>
                  </div>
                ))}</p>

            </div>
            
            
        
    </div>
    </div> : <Spinner/>
    }
      
    </div>
    
    // <div className='container'>
    //     <div className="CardDetail">
    //         <h3>{countryy.name}</h3>
    //         <img className='imageCard' src={countryy.image} alt='#'></img>
            
    //         <div className='InfoCard'>
    //             <p>Code: {countryy.id}</p>
    //             <p>Continent: {countryy.continent}</p>
    //             <p>Capital: {countryy.capital}</p>
    //             <p>Subregion: {countryy.subregion}</p>
    //             <p>Area: {countryy.area}m2</p>
    //             <p>Population: {countryy.population}</p>
    //             <p>Activities: {countryy.activities}</p>
    //         </div>
            
    //     </div>
    // </div> 
  );
};


export default CardDetail;
