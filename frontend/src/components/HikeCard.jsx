import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const HikeCard = () =>{
    const [hike,setHike] = useState({});
    const {id} =useParams();

    useEffect(()=> {
        fetch(`http://localhost:9000/hikes/${id}`,{
            method:'GET',
        })
        .then(response => {
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: Status is ${response.status}`
                );
            }
            return response.json();
        })
        .then(data => {
            setHike(data)
        })
    },[]);
    return(
        <div
        style={{border:'solid'}}>
            <div
            style={{display:'flex', justifyContent:'center', gap:'0px 15px'}}>
                <h3>Hike Name</h3>
                <h4>{hike.name}</h4>
            </div>
            <div
            style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                <h3>Hike Location</h3>
                <h4>{hike.location}</h4>
            </div>

            
            <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Description:</h3>
                    <p>{hike.description}</p>
                </div>
            
            <div
            style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                <h3>Mileage</h3>
                <h4>{hike.miles}</h4>
            </div>
                
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Rating</h3>
                    <p>{hike.rating}</p>
                </div>
        </div>
    )
}
export default HikeCard