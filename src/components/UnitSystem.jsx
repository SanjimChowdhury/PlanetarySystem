import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

const UnitSystem = ({ individualSys, updateSystem, deleteSys }) => {
  const [editForm, setEditForm] = useState(false);
  const [planetName, setplanetName] = useState(individualSys.planetName);
  const [satelliteName, setsatelliteName] = useState(individualSys.satelliteName);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmitEditForm = (e) => {
    e.preventDefault();
    
    const editSystem = {
      id,
      planetName,
      satelliteName
    }

    updateSystem(editSystem)
    console.log(editSystem.id)
  };

  const onDeleteClick = (sysId) => {
    const confirm = window.confirm('Are you sure to delete')

    if(!confirm) return;

    deleteSys(sysId);
    navigate('/');

  }

  

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
              <button onClick={() => onDeleteClick(individualSys.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
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

const systemLoader = async ({ params }) => {
  const res = await fetch(`/api/planetSys/${params.id}`);
  const data = await res.json();
  return data;
};

export {UnitSystem as default, systemLoader }