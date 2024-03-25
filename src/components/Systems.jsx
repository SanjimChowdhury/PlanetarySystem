import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UnitSystem, {systemLoader} from './UnitSystem'
import axios from 'axios';

const Systems = () => {
  const [APIData, setAPIData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/planetSys`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

//Edit System
const updateSystem = async (editedSystem) => {
  const { id, planetName, satelliteName } = editedSystem;
  try {
    const response = await axios.put(`/api/planetSys/${id}`, { planetName, satelliteName });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


  //Delete system
  const deleteSys = async (id) => {
    try {
      const response = await axios.delete(`/api/planetSys/${id}`);
      // Handle response here
      console.log(response.data);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {APIData.map((system) => (
        <UnitSystem key={system.id} individualSys={system} updateSystem={updateSystem} deleteSys={deleteSys}/>
      ))}
    </div>

  )
}

export default Systems