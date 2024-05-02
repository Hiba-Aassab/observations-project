import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function ObservationForm () {

    const [formData, setFormData] = useState({
        employeeFirstName:'',
        employeeLastName: '',
        employeeEnumper: '',
        employeeFunctionality: '',
        employeeZone: '',
        observationZone: '',
        observation: '',
        nameLeaderEmployeeZone: '', // Added field for leader's name
        nameLeaderObservationZone: '' // Added field for leader's name
    });

    const [zones, setZones] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        fetchZones();
    },[]);

    const fetchZones = async () => {
        try{
            const response = await fetch('/api/zones');
            if(response.ok){
                const data = await response.json();
                setZones(data);
            }else{
                console.error('Failed to fetch zones');
            }
            setLoding(false);
        }catch(error){
            console.error('Error fetching zones:', error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
        // Update leader's name when employee zone changes
        if (name === 'employeeZone') {
            const selectedZone = zones.find(zone => zone.id === value);
            if (selectedZone) {
                setFormData(prevState => ({
                    ...prevState,
                    nameLeaderEmployeeZone: selectedZone.leaderFullName
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // anstifto data
            const response = await fetch('/api/observations',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok){
                console.log('Observation submitted successfully');
            }else{
                console.error('Failed to submit observation');
            }
        }catch(error){
                console.error('Error submitting observation:', error);
        }
    
    
    };



    return(
        <div className='px-10 py-20 m-10 rounded-3xl porder-gray-100 bg-slate-300 my-40'>
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className='text-5xl font-semibold text-cyan-900'>Observation form</h1>
                <p className='font-medium text-lg text-gray-500 mt-3'>Please full out the complet form</p>
            </div>
            <div className='mt-8'>

                <div>
                    <label className='text-lg font-medium'>First Name:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='First Name'
                        type='text'
                        name="employeeFirstName"
                        value= {formData.employeeFirstName}
                        onChange={handleChange}

                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Last name:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='last name '
                        type='text'
                        name='employeeLastName'
                        value={formData.employeeLastName}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Matricule or E-number:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Matricule or E-number '
                        type='text'
                        name='employeeEnumber'
                        value={formData.employeeEnumper}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>Your Functionality in EATON:</label>
                    <input
                        className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Functionality '
                        type='text'
                        name='employeeFunctionality'
                        value={formData.employeeFunctionality}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label  className='text-lg font-medium'>The area you work in:</label>
                    <select
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    name='employeeZone'
                    value={formData.employeeZone}
                    onChange={handleChange}
                    >
                    {loading ? (
                            <option disabled>Loading...</option>
                        ) : (
                            zones.map(zone => (
                                <option key={zone.id} value={zone.id}>{zone.name}</option>
                            ))
                        )}
                    </select>
                </div>


                <div>
                    <label  className='text-lg font-medium'>The area where the observation would take place:</label>
                    <select
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    name='observationZone'
                    value={formData.observationZone}
                    onChange={handleChange}
                    >
                     {loading ? (
                            <option disabled>Loading...</option>
                        ) : (
                            zones.map(zone => (
                                <option key={zone.id} value={zone.id}>{zone.name}</option>
                            ))
                        )}
                    </select>
                </div>


                <div>
                    <label  className='text-lg font-medium'>Summarize the current state of the observation:</label>
                    <textarea
                    rows="2" cols="50"
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    name='observation'
                    value={formData.observation}
                    onChange={handleChange}
                    >
                    </textarea>
                </div>


                <div>
                    <label  className='text-lg font-medium'>How do you propose to resolve this observation?</label> 
                    {/* seggestion */}
                    <textarea 
                    rows="2" cols="50"
                    className=' w-full  border-2 border-cyan-900 rounded-xl p-4 mt-1 bg-transparent'
                    name='suggestion'
                    value={formData.seggestion}
                    onChange={handleChange}
                    >
                    </textarea>
                </div>


                <div>
                    <button
                    className='w-full active:scale-[.89] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 rounded-xl bg-cyan-900 text-white text-lg font-bold'
                    type='submit'
                    >Send</button>
                    <Link
                        to="/"
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

