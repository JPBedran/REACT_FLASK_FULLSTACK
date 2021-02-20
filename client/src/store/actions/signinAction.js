import { POST_SIGN_IN, SIGNING_IN } from './types';
import axios from 'axios';

export const sign_in_user = (email, password) => async dispatch =>{
  try{
    dispatch({type: SIGNING_IN})
    const res = await axios.post('http://127.0.0.1:5000/api/signin',{email:email, password:password});
    dispatch({type:POST_SIGN_IN, payload: res.data})
  }catch(err){
    return {err}
  }
}