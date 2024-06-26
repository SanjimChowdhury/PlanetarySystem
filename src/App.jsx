import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import Systems from './components/Systems'
import SysForm from './components/SysForm'


const App = () => {
  //Add new System
  const addNewSys = async ({ planetName, satelliteName }) => {
    try {
      const res = await axios.post('/api/planetSys', { planetName, satelliteName });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Router>
      <>
        <h1 className="text-orange-400 text-5xl mb-4">Planetary System</h1>
        <Systems />
        <SysForm addSystem={addNewSys} />
      </>
    </Router>

  )
}

export default App