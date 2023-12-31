import React,{useState,useEffect} from 'react';

const testComponent = () => {
    const [hikes, setHikes ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/hikes')
            .then(response => response.json())
            .then(data => {
                console.log('data ->', data);
                setHikes(data.data);
            })
    },[]);

const hikeTable = hikes.map(hike =>
    <tr>
    <td>{hike.name}</td>
    <td>{hike.location}</td>
    <td>{hike.miles}</td>
    </tr>
    );
    
    return (
        <div>
            <h2>List of Hikes (from testing.jsx)</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Hike Name
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
                            Miles
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {hikeTable}
                </tbody>
            </table>
            <p>No. of hikes: {hikes.length}</p>
        </div>
    )
};

export default testComponent