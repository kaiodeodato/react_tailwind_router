import React from 'react';
import Navbar from '../Components/Navbar';

const Sobre = () =>{
  return (
    <div className=''>
        <Navbar/>
        <div className='w-full mt-48 flex flex-col justify-center items-center'>
            <h1 className='text-6xl text-orange-200'>Pagina Sobre</h1>
        </div>
    </div>
  );
}

export default Sobre;