import React, { useState } from 'react';

function ObservationPage() {
    // Mock data for observations
    const [observations, setObservations] = useState([
        { id: 1, text: "Observation 1" },
        { id: 2, text: "Observation 2" },
        { id: 3, text: "Observation 3" },
        { id: 4, text: "Observation 4" },
        { id: 5, text: "Observation 5" },
        { id: 6, text: "Observation 6" },
        { id: 7, text: "Observation 7" }
    ]);

    // Function to handle accepting an observation
    const handleAccept = (id) => {
        // Implement your logic here to accept the observation
        console.log(`Accepted observation with ID ${id}`);
    };

    // Function to handle deleting an observation
    const handleDelete = (id) => {
        // Implement your logic here to delete the observation
        console.log(`Deleted observation with ID ${id}`);
    };

    // Function to render each observation
    const renderObservations = () => {
        return observations.map(observation => (
            <div key={observation.id} className="observation-item p-4 border border-gray-200 mb-4 rounded-lg">
                <p>{observation.text}</p>
                <div className="mt-2">
                    <button className="mr-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => handleAccept(observation.id)}>Accepter</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => handleDelete(observation.id)}>Supprimer</button>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Liste des Observations</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {renderObservations()}
            </div>
            <a href="/accepted-observations" className="text-blue-500 hover:underline mt-4 block">Voir les Observations Acceptées</a>
        </div>
    );
}

export default ObservationPage;
