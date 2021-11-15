//Index donde se juntaran todos los states de la aplicacion en un solo state.
import { combineReducers } from 'redux';
import ProductosReducer  from './productosReducer';

export default combineReducers({
    productos: ProductosReducer
});
