import React from 'react';

import"../styles/components/pages/HomePage.css";





const HomePage = (props) => {
    return (
        
        <div className="main">

            <div className="portada">

                <img src="fotos/team.jpg" alt="foto-portada" width="100%" height="auto" />

                <p className="foto">Desarrollamos el potencial de las personas ofreciendo nuevas respuestas
                    ante nuevos escenarios</p>

            </div>

            <div className="portada1">
                <p>
                    Nuestro Proposito Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                    Magni consequatur corrupti
                    est laboriosam ut saepe iusto sunt temporibus earum fugiat assumenda exercitationem mollitia reprehenderit,
                    dolorem ducimus enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae? Magni
                    consequatur corrupti est laboriosam ut saepe iusto sunt temporibus earum fugiat assumenda exercitationem
                    mollitia reprehenderit, dolorem ducimus enim.

                </p>

            </div>

            <div className="section1">
                <div className="portada2">

                    <div>

                        <img src="fotos/Gestindelcambio.jpg" alt="foto-portada" width="100%" height="auto" />


                        <p> Talleres de facilitación a la nueva normalidad - Entorno VICA-COVID 19 </p>
                        <a href="contacto">Mas Informacion</a>

                    </div>
                    <div>

                        <img src="fotos/nuevashabilidades.jpg" alt="foto-portada" width="100%" height="auto" />


                        <p> Programas de Capacitación Online - Entorno VICA-COVID 19 </p>
                        <a href="contacto">Mas Informacion</a>

                    </div>
                    <div>


                        <img src="fotos/Diapositiva1.jpg" alt="foto-portada" width="100%" height="auto" />


                        <p> Procesos de Coaching individuales y grupales </p>
                        <a href="contacto">Mas Informacion</a>

                    </div>


                </div>
            </div>

            <div className="analitica">
                <div>
                    <p>50 Empresas cliente de primera linea <i class="bi bi-check-circle"></i></p>
                    <p>15 años impartiendo capacitacion</p>
                    <p>50.000 personas capacitadas</p>
                    <p>25.000 horas de capacitacion impartidas</p>
                    <p>25 profesionales en el staff de instructores</p>

                </div>

            </div>
        </div>

    );


}

export default HomePage;