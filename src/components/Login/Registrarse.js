import React, { useState, useContext} from 'react'
import { FormUsuario } from '../FormUsuario/FormUsuario';
import { UserAuthContext } from "../../context/LoginContext";
import Swal from 'sweetalert2';
import { BusquedaContext } from "../../context/BusquedaContext";
import { ControlForm } from "../FormUsuario/ControlForm";
import '../CheckOut/CheckOut.css';
import { getFirestore } from "../../firebase/config";
import { useHistory } from 'react-router'

export const Registrarse = () => {
    const [loading, setLoading] = useState(false);
    const {usuario} = useContext(BusquedaContext)
    const {setIsAuthenticated} = useContext(UserAuthContext);
    const history = useHistory();

    const enviarRegistro = async () => {  
        if (ControlForm(usuario)===false) return;
        setLoading(true);
        const db = getFirestore();
        const usuarios = db.collection("usuarios")
        usuarios.add(usuario)
            .then(() => {
                setIsAuthenticated(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario Registrado',
                })
                history.push('/');
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Se Produjo Un Error',
                    text: `${err}.`
                })
            })
            .finally(() => {
                setLoading(false)
            })        
    }

    return (
        <div>
            <h2 className="tituloFormulario">Ingresá tus Datos</h2>
            <FormUsuario  enviar={enviarRegistro} loading={loading}/>              
        </div>
    )
}
