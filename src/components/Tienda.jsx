import React, {useState} from 'react'
import '../style/styleComponents/tienda.css'
import { useDispatch } from 'react-redux';
import {listProducto} from '../actions/actionProducto'

import { useSelector } from 'react-redux';

const Tienda = () => {

    const { Productos } = useSelector(store => store.Productos);

    const dispatch = useDispatch()
    dispatch(listProducto())

    const [imagen, setImagen] = useState('')
    const handleImg = (imag)=>{
        console.log(imag);
        setImagen(imag)
    }

    return (

        <div>
            <div className="contenedor-filtros">
                <ul className="lista-filtros">
                    <li className="item-filtro">Tarjetas de regalo</li>
                    <li className="item-filtro">Prime</li>
                    <li className="item-filtro">Lo más vendido</li>
                    <li className="item-filtro">AmazonBasics</li>
                    <li className="item-filtro">Computo y Tablets</li>
                    <li className="item-filtro">Los más Regalados</li>
                </ul>
            </div>

            <div className="contenedor-categorias">
                <ul className="lista-categorias">
                    <li className="item-categoria">Electrónico</li>
                    <li className="item-categoria">Lo más vendido</li>
                    <li className="item-categoria">Televisión y video</li>
                    <li className="item-categoria">Cómputo y tablets</li>
                    <li className="item-categoria">Audio y equipos de sonido</li>
                    <li className="item-categoria">Mas...</li>
                </ul>
            </div>

            {
                (Productos) ?
                    (

                        Productos.map((element, index) => (

                            <div key={index} className="contenedor-card-producto">
                                <div className="contenedor-imagenes">
                                    <div className="imagenes-pequeñas">
                                        <img src={element.img[0]} alt="" width="50px" onClick={ ()=>{ handleImg(element.img[0]) } } />
                                        <img src={element.img[1]} alt="" width="50px" onClick={ ()=>{ handleImg(element.img[1]) } } />
                                        <img src={element.img[2]} alt="" width="50px" onClick={ ()=>{ handleImg(element.img[2]) } } />
                                    </div>
                                    <div className="imagen-grande">
                                        {(imagen !== "")
                                            ?<img src={imagen} alt="" width="600px" />
                                            :<img src={element.img[2]} alt="" width="600px" />
                                        }
                                    </div>
                                </div>
                                <div className="descripcion">
                                    <p className="nombre-producto">{element.pro}</p>
                                    <p className="referencia-producto">{element.ref}</p>
                                    <p>
                                        <span className="descripcion-producto-titulo">Acerca de este artículo</span><br />
                                        {element.des}</p>
                                    <p className="precio-producto">Precio: {element.pre}</p>
                                </div>
                            </div>
                        )
                        )

                    ) :
                    <p>Datos no disponibles</p>
            }


        </div>
    )
}

export default Tienda
