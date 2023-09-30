import React from 'react';
import './App.css';
import Moyenne from './components/moyenne';
import Tableaux from './components/tableaux';

export const table_notes=[
  {nom:'Manar',math:10.5,phys:12,fr:16},
 {nom:'Mohammed',math:13,phys:18,fr:7},
  {nom:'Khalid',math:15,phys:15,fr:13},
  {nom:'Ikbal',math:2.6,phys:9,fr:10},
  {nom:'Aziz',math:10,phys:11.5,fr:15},
  {nom:'Said',math:12,phys:5,fr:13},
 {nom:'Moujahid',math:20,phys:15,fr:18},
  {nom:'Riyad',math:18,phys:13,fr:15}
];

function App() {
  return <>
  <Moyenne stg={table_notes}/>
  <Tableaux info={table_notes}/>
  </>
}

export default App;
