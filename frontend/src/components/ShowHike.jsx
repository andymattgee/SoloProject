import React from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hike } from '../../../backend/models/hikeModel';
import { FaStar, } from 'react-icons/fa'
import HikeCard from './HikeCard';

const ShowHikes = () => {
    const [hike, setHike] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9000/hikes/${id}`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: Status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(data => {
                // console.log('data inside useEffect ->',data);
                setHike(data);

            })
    }, []);
    console.log('hike state =>', hike);


    const editButtonClick = () => {
        navigate(`/hikes/edit/${id}`);
    }
    const deleteButtonClick = () => {
        navigate(`/hikes/delete/${id}`);
    }
    const imageButtonClick = () => {
        navigate(`/hikes/imageloader/${id}`);
    }


    return (


        // <div
        // style={{padding:'50px', textAlign:'center'}}>
        //         Show hike details here:
        //         <div style={{}}>
        //             <div
        //             style={{display:'flex', justifyContent:'center', gap:'15px'}}>
        //                 <h3>Hike Name:</h3>
        //                 <p>{hike.name}</p>
        //             </div>
        //             <div
        //             style={{display:'flex', justifyContent:'center', gap:'15px'}}>
        //                 <h3>Hike Location:</h3>
        //                 <p>{hike.location}</p>
        //             </div>

        //             <div
        //             style={{display:'flex', justifyContent:'center', gap:'15px'}}>
        //                 <h3>Description:</h3>
        //                 <p>{hike.description}</p>
        //             </div>

        //             <div
        //             style={{display:'flex', justifyContent:'center', gap:'15px'}}>
        //                 <h3>Mileage:</h3>
        //                 <p>{hike.miles}</p>
        //             </div>

        //             <div
        //             style={{display:'flex', justifyContent:'center', gap:'15px'}}>
        //                 <h3>Rating</h3>
        //                 {[...Array(hike.rating)].map((star, index) => {
        //     index += 1;
        //     return (
        //       <div key={index}>
        //         <FaStar style={{color:'gold', border:''}}/>
        //       </div>
        //     );
        //   })}
        //             </div>
        //         </div>
        <div className='show-hike-page-container'>
<h1 style={{textAlign:'center',color:'red',fontSize:'50px'}}>Make this prettier</h1>
            <div >
                <HikeCard />
            </div>
            <br /><br />
            <div style={{ textAlign: 'center' }}>
                <button className='edit-button' onClick={editButtonClick}>Edit Hike here</button>
                <button className='delete-button-card' onClick={deleteButtonClick}>Delete Hike</button>
                <br />
                <button className='image-button' onClick={imageButtonClick}>Upload Images</button>

            </div>
        </div>
    )
}

export default ShowHikes