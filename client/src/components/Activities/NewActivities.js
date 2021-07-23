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
    const [loading2, setLoading2] = useState(true)
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
    useEffect(() => {
        dispatch(getCountries())
        setLoading(true)
        // setPaises(countries);
      }, []);

    useEffect(() => {
        setTimeout(dispatch(getIdCountries()),1000)
      });
      


    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };
    const handlePais = (event) => {

        //AGREGAR VARIOS PAISES CORREGIR SI ESTA CHECKED QUE SE PINTE DE ROJO
        event.preventDefault();
        // const opciones = event.target.options;
        const opciones = event.target.value;
        // const seleccionadas = [];
        // for (let i = 0; i < opciones.length; i++) {opciones[i].selected && seleccionadas.push(seleccionadas, opciones[i].value)};
        setPais([...pais, opciones])
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(pais)
        dispatch(postCountry(form, pais))
        .then(()=>alert('Activity Created'))
        event.target.reset();
        
        // setTimeout(() => { dispatch(getIdCountries()) }, 500)
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
                <label>Season:</label>
                <select name='season' onChange={handleInputChange} required>
                    <option></option>
                    <option value='Verano'>Summer </option>
                    <option value='Invierno'>Winter </option>
                    <option value='Otoño'>Spring </option>
                    <option value='Primavera'>Autumn</option>
                </select>
            </div>

            {/* MULTIPLES PAISES */}
            <div className='Paises'>
                <label>Paises:</label>
                {/* (
                countries?.length ? <div className='container'>                     
                {countries.map(i =>{
                return (<Card country={i} key={i.alpha3Code} />)
                    })}
    </div>:
        <div className='container'>           
                  {countries.map(i =>{
                            return (<Card country={i} key={i.alpha3Code} />)
                })}
        </div>
    ) }*/
                
                <select className='' multiple name='pais' onChange={handlePais} required>
                    {loading ? idCountries.map((country, i) => {
                        return <option value={country.id} key={i}>{country.name}</option>
                    }) : <option >Cargando</option>}
                </select>}
            </div>
                
            <input className='crear' type='submit' value='Create Activity ' />
        </div>
                
    </form>
            {/* <div className='creados'>
                <div className='title'>
                    <span>Paises con actividades</span>
                    <button className='crear' onClick={() => { setLoading2(!loading2) }}>Show</button>
                </div>
                <div className='countries'>
                {loading ? <p>Loading</p>  : paises.length > 0 ? paises.map(pais => <Card act={true} pais={pais} key={pais.alpha3Code} />) : <div className='nada'>No se han creado Actividades aún</div>}
                     </div>
            </div> */}

</div>
)};

export default Crear;