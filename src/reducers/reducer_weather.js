import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
	console.log('Action received', action );

	switch(action.type){
		case FETCH_WEATHER:
			//state.push(action.payload.data); 
			//NOT GOOD: because we should never try to manipulate state object, only update it
			
			// return state.concat([action.payload.data]); == 
			return [ action.payload.data, ...state ]; //Almost identical to line above 
			


	}

	return state;
}