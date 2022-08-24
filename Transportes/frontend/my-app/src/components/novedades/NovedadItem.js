import React from 'react';

const NovedadItem = (props) => {
    const { title, date, body, imagen } = props;

    return (
        
        <div className='novedades' >
            <img src={imagen}  style={{borderRadius: '7px'}}/> <br></br>  
            <div className='ca' style={{color:"rgb(17, 145, 145)",fontSize:"19px",width:'80%' }} >{title}</div><br></br>
            <div className='ca' style={{color:"grey"}}>{date}</div><br></br>
            <div style={{borderBottom:"1px solid", paddingBottom:"15px"}} dangerouslySetInnerHTML={{ __html: body}} /><br></br>  
            
            
        </div>
    );
}
 
export default NovedadItem;