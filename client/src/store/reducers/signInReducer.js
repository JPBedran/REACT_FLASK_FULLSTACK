import { POST_SIGN_IN, SIGNING_IN } from '../actions/types';

const initialstate = {
  name: '',
  email:'', 
}

const signInReducer = (state= initialstate, action) => {
  switch(action.type){
    case SIGNING_IN:
      return {
        ...state
      };
    case POST_SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      };
    default:
      return {
        ...state
      }
  }
}
export default signInReducer;