import {
  CREAT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer =  (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state,[action.payload.id]: action.payload};
        case CREAT_STREAM:
            return {...state,[action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state,[action.payload.id]: action.payload};

        case DELETE_STREAM:
            //
            return {...state}
        default:
            return state;
          
    }
}
export default streamReducer;