import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Charts from './Charts';
import { listaERest } from './listimet'
import RCarousel from './RCarousel'

function App() {
  const [lokacioniTani, setLokacioniTani] = useState('prishtina');
  const [typeOfData,setTypeOfData] = useState([[],"electricity"])
  const [isPhotoClicked,setPhotoClicked] = useState(false)

  return (
    <React.Fragment>
      <Header setLokacioni={setLokacioniTani} />
      <Sidebar setTypeOfData={setTypeOfData} listaERest={listaERest} lokacioniTani={lokacioniTani} setPhotoClicked={setPhotoClicked} />
      {isPhotoClicked ? <RCarousel />:<Charts buttonData={typeOfData}  />}
    </React.Fragment>
  );
}

export default App




  
   

 


