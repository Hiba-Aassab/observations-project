import React from 'react';
import ObservationForm from './ObservationForm';

function ObservationPage() {
    return (
        <div className='flex w-full h-screen '>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-slate-200'>
  
                 <div className="flex p-4">

                    <div className='h-1/4 '>
                        {/* <img  src="eatonLogo.png" alt="Logo" className="max-w-xs" /> */}
                    </div>

                    <div className="p-4 ">
                        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Hello, Welcome!</h1>
                        <p className="text-gray-600 mt-9">Thanks for helping us to resolve and cover more observations in <b>EHS</b>. Eaton at your service.</p>
                        <p className="text-gray-600 mt-2">Observations play a crucial role in improving safety and efficiency within a company. By identifying and addressing potential hazards and issues, companies can create a safer working environment and prevent accidents. This not only protects employees but also enhances productivity and reduces costs associated with accidents and injuries.</p>
                        <h1 className="text-3xl font-bold mt-4">BE A HERO, CHOOSE A ZERO Incident</h1>
                    </div>
                
                    {/* <div className='h-1/4 pl-40 pt-12 justify-center'>
                        <img src="piramide.jpg" alt="piramide" />
                        <div className="p-8">
                        
                        </div>
                    </div> */}
                </div>
              


            </div>
               
            <div className='w-full flex lg:w-1/2  bg-cyan-900 items-center justify-center'> 
                <ObservationForm/>
            </div>
        </div>
    );
}

export default ObservationPage;
