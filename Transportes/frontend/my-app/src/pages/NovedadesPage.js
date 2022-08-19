import React,{ useState, useEffect } from "react";

import "../styles/components/pages/NovedadesPage.css";

import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';







    const NovedadesPage = (props) => {
        const [loading, setLoading] = useState(false);
        const [novedades, setNovedades] = useState([]);

        useEffect(() => {
            const cargarNovedades = async () => {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/novedades');
                setNovedades(response.data);
                setLoading(false);
            };

            cargarNovedades();
        }, []);


        return (
            <div className='nove'>
                <div className='prensa'>
                    <div className='textonove'>
                        <h3>Nuevas actividades de Atencion al Cliente</h3>
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                                novedades.map(item => <NovedadItem key={item.id}
                                title={item.titulo} date={item.fecha}
                                body={item.cuerpo} imagen={item.imagen} />)
                        )}




                    </div>


                </div>

            </div>
        );


    }




export default NovedadesPage;