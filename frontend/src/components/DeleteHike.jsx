import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import HikeCard from './HikeCard';

const DeleteHike = () =>{
    const [deleteStatus,setDeleteStatus] = useState('');
    const {id} = useParams();
    console.log('id ->',id);
    const navigate= useNavigate();

    const handleDeleteHike = () => {
        const requestOptions ={
            method: 'DELETE',
        }
        fetch(`http://localhost:9000/hikes/${id}`,requestOptions)
            .then(response => {
                if(!response.ok){
                    setDeleteStatus('Delete Unsuccessful!')
                    throw new Error(
                        `HTTP error: Status -> ${response.status}`
                    );
                }
                setDeleteStatus('DeleteSuccessful!');
                console.log(deleteStatus);
                navigate('/');
            // }
            // );
            // .then( =>{
            // in case any extra code needed 
            });
    };
    return(
        <div
        // style={{padding:'50px'}}
        className='delete-page-container'
        >
            <HikeCard/>
            <div
            style={{display:'flex',alignItems:'center',flexDirection:'column'}}
            >
                <p className='delete-button-text'>Delete Hike?   </p>
                <button onClick={handleDeleteHike} className= 'delete-button'>Yes</button>
            </div>
        </div>
    )
}
export default DeleteHike