import { typesProducto } from "../types/types";

const initialState = {
    Productos: []
}

export const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.register:
            return {
                Productos: [action.payload]
            }
        case typesProducto.list:
            return {
                Productos: [...action.payload]
            }

        case typesProducto.delete:
            return {
                Productos: state.Productos.filter(est => est.correo !== action.payload)
            }

        default:
            return state;
    }

}