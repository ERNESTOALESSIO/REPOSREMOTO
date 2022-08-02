import React from 'react';
import "../styles/components/pages/ContactoPage.css";
const ContactoPage = (props) => {
    return (
        <div className="delcontacto">
            <div className="formu">
                <h3>Formulario de Contacto</h3>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="Nombre"><strong>Nombre</strong></label>
                        <input type="text" name="" /></p>
                    <p>
                        <label for="Apellido"><strong>Apellido</strong></label>
                        <input type="text" name="" /></p>
                    <p>
                        <label for="CorreoElectronico"><strong>E-Mail</strong></label>
                        <input type="text" name="" ></input></p>
                    <p>
                        <label for="Telefono"><strong>Telefono</strong></label>
                        <input type="text" name="" ></input></p>
                    <p>
                        <label for="Mensaje"><strong>Mensaje</strong></label>
                        <textarea name="" ></textarea></p>

                    <p class="acciones"><input type="submit" value="Enviar" /></p>
                </form>




            </div>

            <div clasName="datos">
                <h4>Contacto Rapido</h4>
                <p>Oficina Barcelona: Aribau 218 5ª 08006 Barcelona.España.</p>
                <p>Telefono: +34 543 456 345</p>
                <p>E-Mail: contacto@Experthia.com</p>
            </div>
            


        </div>







    );


}

export default ContactoPage;