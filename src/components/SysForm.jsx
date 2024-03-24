import React, { useState } from 'react';

const SysForm = ({ addSystem }) => {
    const [planetName, setplanetName] = useState('');
    const [satelliteName, setsatelliteName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const satellitesArray = satelliteName.split(',').map(name => name.trim());
        addSystem({ planetName, satelliteName: satellitesArray });

    };

    return (
        <div className=' mt-12   '>
            <h3 className='text-xl'>Explore new Planet</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className='border rounded py-2 px-3 bg-slate-400' value={planetName} onChange={(e) => setplanetName(e.target.value)} placeholder="Planet Name" required />
                <input type="text" className='border rounded py-2 px-3 bg-slate-400' value={satelliteName} onChange={(e) => setsatelliteName(e.target.value)} placeholder="Sattelite Name" />
                <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>Submit</button>
            </form>
        </div>

    )
}

export default SysForm