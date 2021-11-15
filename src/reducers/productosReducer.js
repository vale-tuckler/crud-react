import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

//Cada reducer tiene su propio State
const initialState = {
    productos: [],
    error: null,
    loading:false
};

//El reducer siempre es una funcion
//todo el reducer es un switch
export default function productosReducer(state = initialState, action){
    switch(action.type){
        default:
            return state   
    }
};