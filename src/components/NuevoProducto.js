import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//useDispatch nos sirve para mandar a ejecutar las acciones que tengamos

//useSelector es una forma en la que accederemos al State dentro del componente


//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0)

    //Dispatch
    const dispatch = useDispatch( crearNuevoProductoAction() );

    //Mandar a llamar el action de productoAction
    const agregarProducto = (producto) => dispatch();
    const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar formulario
        if(nombre.trim() === || precio === 0){
            return;
        }


        return();
        //Si no hay errores

        //Crear el nuevo producto   
    };

    return(
        <div className = 'row justify-content-center'>
            <div className = 'col-md-8'>
                <div className = 'card'>
                    <div className = 'cardbody'>
                        <h2 className = 'text-center mb-4 font-weight-bold'>
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit = {submitNuevoProducto}
                        >
                            <div className = 'form-group'>
                                <label>Nombre producto</label>
                                    <input 
                                        type='text'
                                        className = 'form-control'
                                        placeholder = 'Nombre del producto'
                                        name = 'nombre'
                                        value = {nombre}
                                        onChange = {e => guardarNombre(e.target.value)}
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label>Precio producto</label>
                                    <input 
                                        type='number'
                                        className = 'form-control'
                                        placeholder = 'Precio del producto'
                                        name = 'precio'
                                        value = {precio}
                                        onChange = {e => guardarPrecio(e.target.value)}
                                        
                                    />
                            </div>
                            <button
                                type = 'submit'
                                className = 'btn btn-primary font-weight-bold text-uppercase d-block w-100' 
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
