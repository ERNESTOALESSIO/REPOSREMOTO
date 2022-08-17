import React from 'react';

const NovedadItem = (props) => {
    const { title, date, body, imagen } = props;

    return (
        <div className='novedades' >
                
            <div className='ca'>{title}</div>
            <div className='ca'>{date}</div>
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <img src={imagen} />
            
        </div>
    );
}

export default NovedadItem;