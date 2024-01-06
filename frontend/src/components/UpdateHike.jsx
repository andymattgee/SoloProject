import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ShowHikes from './ShowHike';

const UpdateHike = () =>{
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [miles,setMiles] = useState('');
    const [description, setDescription] = useState('');
    const [rating,setRating] = useState('');
    const [hover, setHover] = useState(0);

    const navigate = useNavigate();
    const{id} = useParams();

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
            setName(data.name);
            setLocation(data.location);
            setMiles(data.miles);
            setDescription(data.description);
            setRating(data.rating);
        })
    },[]);

    const UpdateHikeHandler = () =>{
        const hikeInfo = {
            name,
            location,
            miles,
            description,
            rating,
        };
        const requestOptions ={
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(hikeInfo)
        }
        fetch(`http://localhost:9000/hikes/${id}`,requestOptions)
            .then(response => {
                if(!response.ok){
                    throw new Error(
                        `HTTP Error: status -> ${response.status}`
                    );
                }
                setName(response.formData.name);
                navigate(`/hikes/details/${id}`);
            })
            .catch(error =>{
                alert('Error, check console...',error)
            })
    };
    // console.log('hike ->',name,location,miles)

    return(
        <div
        style={{textAlign:'center',padding:'50px 0px' ,backgroundColor:'rgb(59, 226, 148)', height:'100vh', }}
        >
            <h1>Edit Hikes here!</h1>
            <div>
                <h2>Current Hike Info</h2>
                
            </div>
           <div>
            <label>   Hike Name </label>
            <input
            placeholder={name}
            type = 'text'
            // value ={name}
            onChange={(e) => setName(e.target.value)}>
            </input>
           </div>

           <div>
            <label>   Location </label>
            <input
            placeholder={location}
            type = 'text'
            // value ={location}
            onChange={(e) => setLocation(e.target.value)}
            >
            </input>
           </div>

           <div>
            <label>   Description </label>
            <input
            placeholder={description}
            type = 'text'
            // value ={miles}
            onChange={(e) => setDescription(e.target.value)}>
            </input>
           </div>
           
           <div>
            <label>   Mileage </label>
            <input
            placeholder={miles}
            type = 'text'
            // value ={miles}
            onChange={(e) => setMiles(e.target.value)}>
            </input>
           </div>

           <div>
            <label>   Rating</label>
            {/* <input
            placeholder={rating}
            type = 'text'
            // value ={miles}
            onChange={(e) => setRating(e.target.value)}>
            </input> */}
            {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star fs-2">&#9733;</span>
            
          </button>
        );
      })}
           </div>



            <button onClick={UpdateHikeHandler}> Submit New Hike Data! </button>
        </div>
    )
}
export default UpdateHike;