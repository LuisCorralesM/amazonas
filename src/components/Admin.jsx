import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/fileUpload';
import { listProducto, registerProducto } from '../actions/actionProducto';
import { useSelector } from 'react-redux';
import { deleteProducto } from '../actions/actionProducto';

import '../style/styleComponents/admin.css'

export const Admin = ({ history }) => {


    const { Productos } = useSelector(store => store.Productos);

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        producto: '',
        referencia: '',
        descripcion: '',
        precio: '',
        imagen: []
    })

    let { producto, referencia, descripcion, precio, imagen } = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registerProducto(producto, referencia, descripcion, precio, imagen));
        reset();
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                imagen.push(response)
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        dispatch(listProducto());
    }, [dispatch])

    const styleInputs = {
        width: "350px"
    }

    return (
        <div>

            <form onSubmit={handleRegistro}>
                <h1>Administrar productos</h1>
                <div className="form-group contenedor-crud-producto">
                    <div className="form-group col-md-4">
                        <label htmlFor="producto">Producto</label>
                        <input
                            style={styleInputs}
                            className="form-control"
                            type="text"
                            name="producto"
                            id="producto"
                            value={producto}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="referencia">Referencia</label>
                        <input
                            style={styleInputs}
                            className="form-control"
                            type="text"
                            name="referencia"
                            id="referencia"
                            value={referencia}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input
                            style={styleInputs}
                            className="form-control"
                            type="text"
                            name="descripcion"
                            id="descripcion"
                            value={descripcion}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="precio">Precio</label>
                        <input
                            style={styleInputs}
                            className="form-control"
                            type="text"
                            name="precio"
                            id="precio"
                            value={precio}
                            onChange={handleInputChange} />
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn btn-success"
                            onClick={handlePictureClick} type="button">Imagen
                        </button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>
                </div>
            </form>
            <div>
                <div className="contenedor-listar-productos">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Referencia</th>
                            <th>Descipcion</th>
                            <th>Precio</th>
                            <th>Imagen 1</th>
                            <th>Imagen 2</th>
                            <th>Imagen 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (Productos) ?
                                (

                                    Productos.map((element, index) => (

                                        <tr key={index}>
                                            <td>{element.pro}</td>
                                            <td>{element.ref}</td>
                                            <td>{element.des}</td>
                                            <td>{element.pre}</td>
                                            <td><img src={element.img[0]} alt="" width="50px" /></td>
                                            <td><img src={element.img[1]} alt="" width="50px" /></td>
                                            <td><img src={element.img[2]} alt="" width="50px" /></td>
                                            <td>
                                                <button
                                                    onClick={() => dispatch(deleteProducto(element.ref))}>Eliminar</button>
                                            </td>

                                        </tr>
                                    )
                                    )

                                ) :
                                <p>Datos no disponibles</p>
                        }
                    </tbody>
                </div>
            </div>

        </div>
    )
}
