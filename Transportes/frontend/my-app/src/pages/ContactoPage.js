
import "../styles/components/pages/ContactoPage.css";
import React, { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',

    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div className="delcontacto">
            <div className="formu">
                <h3 >Formulario de Contacto</h3>
                <form className="formulario" onSubmit={handleSubmit}    >
                    <p>
                        <label for="nombre"><strong>Nombre</strong></label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} /></p>

                    <p>
                        <label for="email"><strong>E-Mail     </strong></label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} ></input></p>
                    <p>
                        <label for="telefono"><strong>Telefono</strong></label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} ></input></p>
                    <p>
                        <label for="mensaje"><strong>Mensaje</strong></label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea></p>

                    {sending ? <p className="enviando" >Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                    <p ><input type="submit" value="Enviar" /></p>
                </form>




            </div>

            <div className="datos">
                <h3>Contacto Rapido</h3>
                <p>Oficina Barcelona: Aribau 218 5ª (08006) Barcelona.España.</p>
                <p>Telefono: +34 543 456 345</p>
                <p>E-Mail: contacto@Experthia.com</p>
                <p>Web: www.experthia.com</p>
                
            </div>



        </div>


    );


}

export default ContactoPage;