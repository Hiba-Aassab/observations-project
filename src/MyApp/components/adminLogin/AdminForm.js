import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import prismadb from '../../../lib/prismadb';


export default function AdminForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');


    const handleSignIn = async () => {
        try{
            const user = await prismadb.user.findFirst({
                where:{
                    email: email,
                    password: password,
                    isAdmin: true //kychof wach kyn had chart
                }
            });

            if(user){
                // Authentication successful, navigate to admin dashboard or perform further actions
                console.log("Authentification successful:", user);
            }else{
                setError("invalid email or password");
            }
        }catch(error){
            console.error("Error Authenticating admin:", error) ;
            setError("An error occurred while authenticating") 
    }}




    return (
        <div className='bg-white px-20 py-20 rounded-3xl porder-gray-100'>
            <h1 className='text-5xl font-semibold text-blue-800'>Hello!..Welcom</h1>
            {/* <h1 className='text-5xl font-bold text-blue-800'>Welcom</h1> */}
            <h1 className='text-xl font-bold mt-6 text-gray-700'>Admin Login</h1>
            <p className='font-medium text-lg text-gray-500 '>Please enter your details</p>

            <div className='mt-8 '>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className=' w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='xxxxxxxx@eaton.com'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className=' w-full  border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='enter your password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                </div>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        className='active:scale-[.89] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 rounded-xl bg-blue-800 text-white text-lg font-bold'
                        onClick={handleSignIn}
                        >
                            
                            Sign in
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <Link
                        to="/"
                        className='active:scale-[.89] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 hover:text-blue-500 text-lg '
                    >
                        Sign in as an Employee
                    </Link>
            </div>
        </div>
    );
}
