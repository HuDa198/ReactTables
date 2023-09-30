import React from 'react';

function Moyenne(tab){
    let {stg}=tab;
    return <ul>
        {stg.map(i=><li><span style={{color:'blue',fontWeight:'bolder'}}>{i.nom} </span>Moyenne: {((i.math+i.phys+i.fr)/3).toFixed(2)}</li>)}
    </ul>
}

export default Moyenne;