import React from 'react'

const UnitSystem = ({individualSys}) => {
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
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default UnitSystem