import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ObservationForm () {
    return(
        <div className='px-10 py-20 m-10 rounded-3xl porder-gray-100 bg-slate-300 my-40'>
        <form>
            <div>
                <h1 className='text-5xl font-semibold text-cyan-900'>Observation form</h1>
                <p className='font-medium text-lg text-gray-500 mt-3'>Please full out the complet form</p>
            </div>
            <div className='mt-8'>

                <div>
                    <label className='text-lg font-medium'>First Name:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Name'
                        type='text'
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Last name:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='last name '
                        type='text'
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Matricule or E-number:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Matricule or E-number '
                        type='text'
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Your Functionality in EATON:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Functionality '
                        type='text'
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>The area you work in:</label>
                    <select
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    >
                        <option></option> 
                        {/* from database */}
                    </select>
                </div>


                <div>
                    <label  className='text-lg font-medium'>The area where the observation would take place:</label>
                    <select
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    >
                        <option></option> 
                        {/* from database */}
                    </select>
                </div>


                <div>
                    <label  className='text-lg font-medium'>Summarize the current state of the observation:</label>
                    <textarea
                    rows="2" cols="50"
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    >
                    </textarea>
                </div>


                <div>
                    <label  className='text-lg font-medium'>How do you propose to resolve this observation?</label> 
                    {/* seggestion */}
                    <textarea 
                    rows="2" cols="50"
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    >
                    </textarea>
                </div>


                <div>
                    <button
                    className='w-full active:scale-[.89] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 rounded-xl bg-cyan-900 text-white text-lg font-bold'
                    >Send</button>
                    <Link
                        // to="/"
                        className='active:scale-[.89] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 hover:text-blue-500 text-lg '
                    >
                        Sign in as an Employee
                    </Link>
                </div>


            </div>
        </form>
        </div>
    );
}

