

//import action type
import {FETCH_WEATHER} from './../actions/index';

//we would like to have a state with all of our
//weather data available for a 5 day period
//the best approach would be to make an array
//the first action - should then pull all of the data we require
//from the API & store it into application state -
//this would also ensure we are only calling the API once & reducing load times

export default function(state = [], action){
    // create switch statement
    switch(action.type){
        //FETCH_WEATHER only when searching for a city
        case FETCH_WEATHER:
        //Add Fetched data to the state
        // Note - First part is pushed to top of the array
        return [ action.payload.data, ...state ];
        // alternative code
        //return state.concat([action.payload.data]);
        

    }
    return state
}