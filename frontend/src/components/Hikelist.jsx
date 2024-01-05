import React,{useState,useEffect} from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

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
                // console.log('data ->', data);
                setHikes(data.data);
            })
    },[]);

const hikeTable = hikes.map(({name,location,miles,_id}) => //destructured out from hike object
  
    <tr key={_id}>   
    <td><Link to={`/hikes/details/${_id}`}>{name}</Link></td>
    <td>{location}</td>
    <td>{miles}</td>
    <td>{_id}</td>
    <td><button>Link to pics eventually</button></td>
    {/* <td><button><Link to={`/hikes/details/${_id}`}>Details Here</Link></button></td> */}
    <td><button><Link to={`hikes/delete/${_id}`}>Delete Hike</Link></button></td>
    
    </tr>
    );
    
    return (
        <div>
            
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
                            _Id
                        </th>
                        <th>
                            Link to pictures?
                        </th>
                        {/* <th>
                            Info
                        </th> */}
                        <th>
                            Delete?
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {hikeTable}
                </tbody>
            </table>
            <div style={{display:'flex',justifyContent:'center',gap:'50px'}}>
            <p>No. of hikes: {hikes.length} </p>
            <button style={{background:'transparent'}}><Link to='/hikes/create'>Create a new Hike here!</Link></button>
            
            </div>
        </div>
    )
};

export default Hikelist