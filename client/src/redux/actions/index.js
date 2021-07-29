import axios from 'axios'
import { BASE_URL, GET_COUNTRIES, FILTER_URL } from '../consts.js'

export const getCountries = () => {
    return async (dispatch) => {
        const request = await axios.get(`${GET_COUNTRIES}/api`)
        dispatch({
            type: 'GET_COUNTRIES', payload: request.data.map(country => {
                return {
                    name: country.name,
                    image: country.image,
                    continent: country.continent,
                    alpha3Code: country.id,
                    activities: country.activities,
                    population: country.population
                }
            })
        })
    }
}
export const getIdCountries = () => {
    return async (dispatch) => {
        const request = await axios.get(`${GET_COUNTRIES}/api`)
        dispatch({
            type: 'GET_IDCOUNTRY', payload: request.data.map(country => {
                return {
                    name: country.name,
                    id: country.id
                }
            })
        })
    }
}

export const getCountry = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${GET_COUNTRIES}/api/${id}`)
        dispatch({type: 'GET_COUNTRY', payload: request.data})
        }
}
export const getNameCountry = (name) => {
    return async (dispatch) => {
    const request = await axios.get(`${GET_COUNTRIES}?name=${name}`)
    dispatch({type:'GET_NAME_COUNTRY', 
        payload: request.data.map(e =>{
                return {
                  name: e.name,
                  image: e.image,
                  continent: e.continent,
                  activities: e.activities,
                  population: e.population,
                  alpha3Code: e.id  
                };
              
        })})
    }
}
export const orderContinent = (continent) => {
    return async (dispatch) => {
        const request = await axios.get(`${FILTER_URL}/continent/?continent=${continent}`)
        dispatch({type: 'ORDER_CONTINENT', payload: 
        request.data.map(e=>{
            return {
                name: e.name,
                image: e.image,
                continent: e.continent,
                activities: e.activities,
                population: e.population,
                alpha3Code: e.id  
              };
        })

    })
    }
}
export const ordering = (order) => {
    return async (dispatch) => {
        const request = await axios.get(`${FILTER_URL}/order/?order=${order}`);
        dispatch({type: 'ORDERING', payload: 
        request.data.map(e=>{
            return {
                name: e.name,
                image: e.image,
                continent: e.continent,
                activities: e.activities,
                population: e.population,
                alpha3Code: e.id  
              };
        })

    })
    }
}
export const orderPopu = (order) => {
    return async (dispatch) => {
        const request = await axios.get(`${FILTER_URL}/population/?order=${order}`);
        dispatch({type: 'ORDER_POPU', payload: 
        request.data.map(e=>{
            return {
                name: e.name,
                image: e.image,
                continent: e.continent,
                activities: e.activities,
                population: e.population,
                alpha3Code: e.id  
              };
        })

    })
    }
}
export const getCountriesAct = () => {
    return async (dispatch) => {
        const request = await axios.get(`${FILTER_URL}/activities`)
        dispatch({
            type: 'GET_COUNTRIES_ACT', payload: request.data.map(country => {
                 if(country.activities.length >0) {
                return {
                    name: country.name,
                    image: country.image,
                    continent: country.continent,
                    alpha3Code: country.id,
                    activities: country.activities,
                    population: country.population
                }}
            })
        })
    }
}

export const getCountriesPag = (page) => {
    return async (dispatch) => {
        const request = await axios.get(`${GET_COUNTRIES}?page=${page}`)
        dispatch({
            type: 'GET_COUNTRIES', payload: request.data })
        
    }
}


export const postCountry = (form, countries) => {
    console.log('ENTRO A LA ACCION!')
    return async () => {
        await axios.post(`${BASE_URL}/activities`, Object.assign(form, { Countries: countries }))
    }
}







