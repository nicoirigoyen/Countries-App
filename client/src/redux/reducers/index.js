
const initialState = {
    countries: [],
    country: [],
    idCountries: [],
    // countriess: [],
}

export function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'GET_COUNTRIES':
            return {...state, countries: action.payload}

        case 'GET_NAME_COUNTRY':
            return {...state, country: action.payload}

        case 'GET_COUNTRY':
            return {...state, country: action.payload}
        
        case 'GET_IDCOUNTRY':
            return {
                    ...state, idCountries: action.payload}
                    
        case 'ORDER_CONTINENT':
            return{
                ...state, countries: action.payload
            }
        // case 'ORDER_DESC':
        // return{
            
        //     ...state, countries: action.payload
        // }
        case 'ORDERING':
        return{
            
            ...state, countries: action.payload
        }
        case 'ORDER_POPU':
        return{
            
            ...state, countries: action.payload
        }
        case 'GET_COUNTRIES_ACT':
        return{
            
            ...state, countriess: action.payload
            
        }
        default:
             return {
                ...state}
    };
}