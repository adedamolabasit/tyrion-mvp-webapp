import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../../constants/userConstant'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config ={
            headers : {
                'content-type' : 'application/json'
            }
        }

        const {data} = await axios.post(
            `/api/users/login/`,
            {'username':email,'password':password},
            config
            )
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
   
  };
export const register = (name,username,email, password) => async (dispatch) => {
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config ={
            headers : {
                'content-type' : 'application/json'
            }
        }

        const {data} = await axios.post(
            `/api/users/register/`,
            {'name':name,'username':email,'password':password},
            config
            )
        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
   
  };


