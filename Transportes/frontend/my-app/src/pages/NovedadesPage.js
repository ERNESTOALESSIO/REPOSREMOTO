import React from 'react';

import "../styles/components/pages/NovedadesPage.css";

const NovedadesPage = (props) => {
    return (
        <div className='nove'>
            <div className='prensa'>
                <div className='textonove'>
                    <h3>Nuevas actividades de Atencion al Cliente</h3>
                    <p>15/06/2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLoreorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLore</p>
                </div>
                <div className='novefoto'>
                    <img src="fotos/clientes.jpg" alt="clientes"  /></div>

                
            </div>

            <div className='prensa'>
                <div className='textonove'>
                    <h3>El nuevo liderazgo post-pandemia</h3>
                    <p>15/06/2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?Magni consequatur corrupti est laboriosam ut saLoreorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLoreLorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLoreorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLore</p>
                </div>
                <div className='novefoto'>
                    <img src="fotos/liderazgo.jpg" alt="liderazgo"  /></div>

                
            </div>

            <div className='prensa'>
                <div className='textonove'>
                    <h3>Nuevas tendencias de recruiting</h3>
                    <p>15/06/2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLoreorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, non repudiandae?
                        Magni consequatur corrupti est laboriosam ut saLore</p>
                </div>
                <div className='novefoto'>
                    <img src="fotos/recruiting.jpg" alt="recruiting"  /></div>

                
            </div>

        </div>

    );


}

export default NovedadesPage;