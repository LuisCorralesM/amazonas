import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registroReducer";
import { productoReducer } from "../reducers/productoReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login:loginReducer,
    register:registerReducer,
    Productos: productoReducer
})

export const store = createStore (
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)  // el segundo parameteo es el middleware
    )
)

