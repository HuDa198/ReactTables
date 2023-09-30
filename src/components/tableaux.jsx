import React from 'react';
import './tableaux.css';

function Tableaux(tab){
    let {info}=tab;
    return <div id='tableaux'>
    <table>
        <thead>
            <th>Nom</th>
            <th>Mathematique</th>
            <th>Physique</th>
            <th>Francais</th>
            <th>Moyenne</th>
        </thead>
        <tbody>
            {info.map(i=><tr><td>{i.nom}</td><td>{(i.math).toFixed(2)}</td><td>{(i.phys).toFixed(2)}</td><td>{(i.fr).toFixed(2)}</td><td> {((i.math+i.phys+i.fr)/3).toFixed(2)}</td></tr>)}
        </tbody>

    </table>
    </div>
}

export default Tableaux;