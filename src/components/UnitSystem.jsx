import { useState } from 'react';
import React from 'react'

const UnitSystem = ({individualSys}) => {
 const [editForm, setEditForm] = useState(false);
 const [planetName, setplanetName] = useState(individualSys.planetName);
    const [satelliteName, setsatelliteName] = useState(individualSys.satelliteName);

 const handleSubmitEditForm = (e) => {
  e.preventDefault();
  // Handle the form submission here
};
  return (
    <>
    <div class="bg-white rounded-lg shadow-lg p-5 md:p-10 mx-2">
    <h2 class="text-2xl font-bold mb-2">Planet: <span id="planet-name">{individualSys.planetName}</span></h2>
    <div id="moons-list" class="space-y-3">
      <div class="flex justify-between items-center">
        <p>Moon: {individualSys.satelliteName.map((satellite, index) => (
              <li key={index}>{satellite}</li>
            ))}</p>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Like</button>
          <button onClick={() => setEditForm(!editForm)} class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
        </div>
        
        
      </div>
    </div>
    <div>
          {editForm && (
          <form onSubmit={handleSubmitEditForm}>
                <input type="text" className='border rounded py-2 px-3 bg-slate-400' value={planetName} onChange={(e) => setplanetName(e.target.value)} placeholder="Planet Name" required />
                <input type="text" className='border rounded py-2 px-3 bg-slate-400' value={satelliteName} onChange={(e) => setsatelliteName(e.target.value)} placeholder="Sattelite Name" />
                <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>Submit edit</button>
            </form>
            )}
        </div>
  </div>
    </>
  )
}

export default UnitSystem