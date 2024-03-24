import React, {useState} from 'react'
import Systems from './components/Systems'
import SysForm from './components/SysForm'


const App = () => {
  const addNewSys = async ({ planetName, satelliteName }) => {
    const res = await fetch('/api/planetSys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planetName, satelliteName }),
    });
    return;
  };
  return (
    <>
    <h1 className="text-orange-400">Planetary System</h1>
    <Systems />
    <SysForm addSystem={addNewSys}/>
    </>
  )
}

export default App