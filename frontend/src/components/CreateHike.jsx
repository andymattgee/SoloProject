import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarRating from './StarComponent';
import "./style.scss";

const CreateHike = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [miles, setMiles] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [hover, setHover] = useState(0);
    const navigate = useNavigate();

    const createHikeButtonHandler = () => {
        const hikeInfo = { //this was working before image
            name,
            location,
            miles,
            description,
            rating,
        };


        // e.preventDefault();
        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("location", location);
        // formData.append("miles", miles);
        // formData.append("description", description);
        // formData.append("rating", rating);
        // formData.append("image", image);
        // const formDataOptions = { //dont need to set headers for FormData/sending file w fetch API ?? 
        //     method: 'POST',
        //     body: formData,
        // };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(hikeInfo)
        }
        fetch('http://localhost:9000/hikes', requestOptions) //had request options before
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `HTTP Error: status -> ${response.status}`
                    );
                }
                // console.log(response);
                navigate('/');
            })
            .catch(error => {
                console.log('error from with in fetch req in CreateHike');
                alert('Error, from catch block in fetch of CreateHike', error)
            })
    };
    // console.log('hike ->', name, location, miles);
    //_______________________________________
    // const submitImage = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("image", image);
    //     console.log('image -->',image);
    //     const result = await axios.post(
    //       `http://localhost:9000/hikes/imageloader/${id}`,
    //       formData,
    //       {
    //         headers: { "Content-Type": "multipart/form-data" },
    //       }
    //     )
    //         .then(res =>{
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log("error ->", err);
    //         })
    //   };

    // const handlePhoto = (e) =>{
    //     console.log(e.target.files[0]);
    //     setImage(e.target.files[0]);
    // }

    return (
        
            <div className='form-page'>
                <div className='form-container'>
                    <label>   Hike Name </label>
                    <input
                    style={{width:'255px',}}
                        placeholder={name}
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                

                
                    <label>   Location </label>
                    <input
                    style={{width:'255px',}}
                        type='text'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
                    </input>
                

                
                    <label>   Description </label>
                    {/* <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </input> */}
                    <textarea
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="10"
                    cols="30"
                    >

                    </textarea>
                

                
                    <label>   Mileage </label>
                    <input
                        type='text'
                        value={miles}
                        onChange={(e) => setMiles(e.target.value)}>
                    </input>
                

                <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px' }}>
                    <label>   Rating </label>
                    {/* <input
                    type='text'
                    value={rating}
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
                                <span className="star fs-2" style={{size:'50'}}>&#9733;</span>

                            </button>
                        );
                    })}
                </div>

                {/* <div>
                <form encType='multipart/form-data'>
                    <input 
                    type='file' 
                    filename = 'image'
                    className='form-control-file'
                    accept='.png, .svg,.jpg, .jpeg, .gif' 
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        console.log('file/image info ->',e.target.files[0]);
                        }
                        }>

                    </input>
                    <button type='submit'>Submit</button>
                </form>
            </div> */}

                <button onClick={createHikeButtonHandler} className='create-button'> Submit Hike! </button>
                </div>
            </div>
        
    )
}
export default CreateHike;