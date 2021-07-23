import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import '../../../img/spinner.gif'

const Card = ({ country, loading}) => {
    if(loading){
        return <h2>Loading...</h2> 
    }
    return (
        <div className='containerCard'>
            <div className='card'>
                <h3 className='cardName'>{country.name}</h3>
                <img className='imageCard' src={country.image} alt='#'></img>
                <p>{country.continent}</p>
                <button className='containerVermas'>
                    <NavLink className= 'txtVermas 'to={`/countries/${country.alpha3Code}`}>Ver Mas</NavLink>
                </button>
            </div>
        </div>
    )
}


export default Card;