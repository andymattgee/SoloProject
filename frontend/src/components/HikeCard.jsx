import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaStar, } from 'react-icons/fa'

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
        <div className='card-container'
        // style={{background:'red'}}
        >
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
                    {[...Array(hike.rating)].map((star, index) => {
        index += 1;
        return (
          <div key={index}>
            <FaStar style={{color:'gold', border:''}}/>
          </div>
        );
      })}
                </div>
        </div>
    )
}
export default HikeCard