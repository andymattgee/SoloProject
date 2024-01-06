import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hike } from '../../../backend/models/hikeModel';

const ShowHikes = () =>{
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
            console.log('data inside useEffect ->',data);
            setHike(data)
        })
    },[]);
    console.log('hike state =>', hike);
    return(
        <div
        style={{padding:'50px', textAlign:'center'}}>
            Show hike details here:
            <div style={{border:'solid'}}>
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Hike Name:</h3>
                    <p>{hike.name}</p>
                </div>
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Hike Location:</h3>
                    <p>{hike.location}</p>
                </div>
                
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Description:</h3>
                    <p>{hike.description}</p>
                </div>
                
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Mileage:</h3>
                    <p>{hike.miles}</p>
                </div>
                
                <div
                style={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <h3>Rating</h3>
                    {/* <p>{hike.rating}</p> */}
                    {[...Array(hike.rating)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            // className={index <= (hover || rating) ? "on" : "off"}
            // onClick={() => setRating(index)}
            // onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}
          >
            <span className="star fs-2">&#9733;</span>
            
          </button>
        );
      })}
                </div>

            </div>
            <br/><br/>
            <div>
                <button><Link to={`/hikes/edit/${id}`}>Edit Hike here</Link></button>
                <button><Link to ={`/hikes/delete/${id}`}>Delete Hike</Link></button>
                <br/>
                {/* <button><Link to={`/hikes/imageloader/${id}`}>Upload Images</Link></button> */}

            </div>
        </div>
    )
}
export default ShowHikes