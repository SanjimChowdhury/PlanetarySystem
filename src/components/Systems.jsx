import React, { useEffect, useState } from 'react';
import UnitSystem from './UnitSystem'
import axios from 'axios';

const Systems = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`/api/planetSys`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {APIData.map((system) => (
        <UnitSystem key={system.id} individualSys={system} />
      ))}
    </div>

  )
}

export default Systems