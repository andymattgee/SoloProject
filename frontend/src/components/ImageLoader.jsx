import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ImageLoader = () => {
    const [image,setImage] = useState();
    const { id } =useParams();
// const submitImage = async (e) =>{
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image",image);
//     const requestOptions = {
//         method:'POST',
//         headers: { "Content-Type": "multipart/form-data" },
//         body: JSON.stringify(formData),
//     }
//     fetch('http://localhost:9000/upload-image',requestOptions)
//         .then(response => {
//             if(!response.ok){
//                 console.log(response);
//                 throw new Error (
//                     `HTTP Error: Status -> ${response.status}, error coming from fetch response with in image loader`
//                 );
//             }  
//         })
// };

const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    console.log('image -->',image);
    const result = await axios.post(
      `http://localhost:9000/hikes/imageloader/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            console.log("error ->", err);
        })
  };

const handlePhoto = (e) =>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
}

  return (
    <div>
        <form onSubmit={submitImage} encType='multipart/form-data'>
            <input type='file' accept='.png, .svg,.jpg, .jpeg, .gif' onChange={handlePhoto}></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ImageLoader