import React,{useState,useEffect} from 'react';
import './style.scss';

const Hikelist = () => {
    const [hikes, setHikes ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:9000/hikes',{
            method: "GET" 
        })
            .then(response => {
                if(!response.ok){
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json()
            })
            .then(data => {
                console.log('data ->', data);
                setHikes(data.data);
            })
    },[]);

const hikeTable = hikes.map(({name,location,miles,_id}) => //destructured out from hike object
    
    <tr key={_id}>   
    <td>{name}</td>
    <td>{location}</td>
    <td>{miles}</td>
    <td><button>{_id}</button></td>
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
                        <th>
                            Icons?
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

export default Hikelist