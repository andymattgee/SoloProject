import React,{useState,useEffect} from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {FcFullTrash} from 'react-icons/fc';
import hikingDog from '../assets/pexels-spencer-gurley-films-1448055.jpg';


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
    <td ><Link to={`/hikes/details/${_id}`} className='link-name'><h3 className='hike-name'>{name}</h3></Link></td>
    <td className='location-text'>{location}</td>
    <td className='miles-text'>{miles}</td>
    {/* <td>{_id}</td> */}
    <td><Link to={`/hikes/details/${_id}`}><img  src={hikingDog} alt="" className='puppy-dog' /></Link></td>
    {/* <td><button><Link to={}>Details Here</Link></button></td> */}
    {/* <td><button><Link to={`hikes/delete/${_id}`}>Delete Hike</Link></button></td> */}
    <td><Link to ={`/hikes/delete/${_id}`}><FcFullTrash size={50}/></Link></td>
    
    </tr>
    );
    
    return (
        <div>
            
            <table className='table' >
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
                        {/* <th>
                            _Id
                        </th> */}
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
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'50px'}}>
            <h1 style={{color:'white'}}>Total Hikes: {hikes.length} </h1>
            <button className='create-button'><Link to='/hikes/create'>Create a new Hike here!</Link></button>
            
            </div>
        </div>
    )
};

export default Hikelist