// Navbar 
import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin'
import { useDispatch } from 'react-redux'
import '../style/styleComponents/navbar.css'

export const Navbar = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="./assets/navbar/logo-amazon.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#1916A5" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                            <li className="nav-item">
                                {/* Debo cambiar la ruta para que leve al mapa */}
                                <span className="text-light">Hola</span><br />
                                <Link className="nav-link" to="/mapa">Elige tu dirección </Link>
                            </li>
                            <form className="d-flex input-buscar">
                                <input className="form-control my-3" type="search" placeholder="Buscar producto..." aria-label="Search" />
                                <button className="btn btn-outLinkne-success text-light p-0" type="submit"><img src="./assets/navbar/lupa.png" alt="" /></button>
                            </form>
                            <li className="nav-item contenedor-cerrar-sesion">
                                <span className="saludo-personalizado"> Hola, {"name"}  </span><br />
                                <button onClick={handleLogout} className="btn-cerrar-sesion">Cerrar sesión</button>
                            </li>
                            <li className="nav-item">
                                <span className="devoluciones">Devoluciones</span><br />
                                <span>Y Pedidos</span>
                            </li>
                            <li>
                            <Link className="nav-link" to="/admin"><button className="sesion-crud-admin">Admin </button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
