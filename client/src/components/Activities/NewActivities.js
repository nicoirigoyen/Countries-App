import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCountry, getCountries, getIdCountries } from '../../redux/actions/index'
import Card from '../Home/Card/Card'
import '../Activities/NewActivities.css'
 
const Crear = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const idCountries = useSelector(state => state.idCountries)
    const [pais, setPais] = useState([])
    const [paises, setPaises] = useState([])
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        dificultty: '',
        duration: '',
        season: '',
    })
    
    // const handleFilter = (arrayPaises) => {
    //     setPaises([]);
    //     let filteredPaises = arrayPaises;
    //     filteredPaises = filteredPaises.filter(p => p.activities && p.activities.length > 0)
    //     setPaises(filteredPaises)
    // };
    useEffect(async ()  => {
        await dispatch(getIdCountries())
        setPaises(idCountries);
        setLoading(true)
      }, []);

    // useEffect(() => {
    //     setTimeout(dispatch(getIdCountries()),1000)
    //   });
      


    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };
    const handlePais = (event) => {
        event.preventDefault();
        const opciones = event.target.value;
        setPais([...pais, opciones])
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(pais)
        dispatch(postCountry(form, pais))
        .then(()=>alert('Activity Created'))
        event.target.reset();
    };
return (
    <div className='fondo'>
    <form className='formAct' onSubmit={handleSubmit}>
        <span className='tittles'>Create Activity</span>
        <div className='inputs'>
            <div className='name'>
                <label>Name:</label>
                <input className='colorInputName' type='text' name='name' onChange={handleInputChange} required />
            </div>
            <div className='dificultty'>
                <label>Difficulty(1-5):</label>
                <input className='colorInputdificult' type='number' min="1" max="5" name='dificultty' onChange={handleInputChange} required />
            </div>
            <div className='duration'>
                <label>Duration(Weeks): </label>
                <input className='colorInputduratiob' type='number' min="1" name='duration' onChange={handleInputChange} required />
            </div>

            <div className='season'>
                <label >Season:</label>
                <select className='colorInputseason' onChange={handleInputChange} required>
                    <option className='itemsSelected'></option>
                    <option className='itemsSelected' value='Verano'>Summer </option>
                    <option className='itemsSelected' value='Invierno'>Winter </option>
                    <option className='itemsSelected' value='Otoño'>Spring </option>
                    <option className='itemsSelected' value='Primavera'>Autumn</option>
                </select>
            </div>

            <div className='Paises'>
                <label className='titleSelected'>Selected Countries:</label>
                {
                <select className='selectedCountries' multiple name='pais' onChange={handlePais} required>
                    {loading ? idCountries.map((country, i) => {
                        return <option value={country.id} key={i}>{country.name}</option>
                    }) : <option >Loading..</option>}
                </select>}
            </div>
                
            <input className='crear' type='submit' value='Add' />
        </div>
                
    </form>
  

</div>
)};

export default Crear;