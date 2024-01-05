import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';

const CreateHike = () =>{
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [miles,setMiles] = useState('');
    const [description,setDescription] = useState('');
    const [rating, setRating] = useState('');
    const navigate = useNavigate();

    const createHikeHandler = () =>{
        const hikeInfo = {
            name,
            location,
            miles,
            description,
            rating,
        };
        const requestOptions ={
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(hikeInfo)
        }
        fetch('http://localhost:9000/hikes',requestOptions)
            .then(response => {
                if(!response.ok){
                    throw new Error(
                        `HTTP Error: status -> ${response.status}`
                    );
                }
                // console.log(response);
                navigate('/');
            })
            .catch(error =>{
                alert('Error, check console...',error)
            })
    };
    console.log('hike ->',name,location,miles)
    return(
        <div
        style={{textAlign:'center',padding:'50px 0px' ,backgroundColor:'rgb(59, 226, 148)', height:'100vh', }}
        >
            Template/input fields here to create a new hike! 
            
           <div>
            <label>   Hike Name </label>
            <input
            placeholder={name}
            type = 'text'
            value ={name}
            onChange={(e) => setName(e.target.value)}>
            </input>
           </div>

           <div>
            <label>   Location </label>
            <input
            type = 'text'
            value ={location}
            onChange={(e) => setLocation(e.target.value)}>
            </input>
           </div>

           <div>
            <label>   Description </label>
            <input
            type = 'text'
            value ={description}
            onChange={(e) => setDescription(e.target.value)}>
            </input>
           </div>
           
           <div>
            <label>   Mileage </label>
            <input
            type = 'text'
            value ={miles}
            onChange={(e) => setMiles(e.target.value)}>
            </input>
           </div>
           
           <div>
            <label>   Rating </label>
            <input
            type = 'text'
            value ={rating}
            onChange={(e) => setRating(e.target.value)}>
            </input>
           </div>


            <button onClick={createHikeHandler}> Submit Hike! </button>
        </div>
    )
}
export default CreateHike;