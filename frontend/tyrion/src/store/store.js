import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers'


const reducer = combineReducers({
    productList:productListReducer,
    productListDetail:productDetailsReducer,
    cart:cartReducers,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo')?
        JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {cartItems: cartItemsFromLocalStorage},
    userLogin : {userInfo: userInfoFromLocalStorage}
}

const middleware = [thunk]


const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store