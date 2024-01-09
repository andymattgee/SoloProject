import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import hadOne from '../assets/if-i-had-one-angry.gif';
import boardHike from '../assets/board-hike.jpg'
import OrHike from '../assets/orHike.jpg';
import cliff from '../assets/cliff.jpg';



const ImageLoader = () => {
  const [image, setImage] = useState();
  const { id } = useParams();
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
  //_______________________
  
  //_____________________
  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    console.log('image -->', image);
    const result = await axios.post(
      `http://localhost:9000/hikes/imageloader/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("error ->", err);
      })
  };

  const handlePhoto = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  return (
    <div>
      <div className='upload-block'>
        <form onSubmit={submitImage} encType='multipart/form-data'>
          <input type='file' accept='.png, .svg,.jpg, .jpeg, .gif' onChange={handlePhoto}></input>
          <button type='submit' style={{border:'solid'}}>Submit</button>
        </form>
      </div><br></br>
        <h3 style={{textAlign:'center'}}>Image gallery/carousel here</h3>
      <div className='had-one-gif'>
        <img src={hadOne} ></img>
      </div>

      {/* <div>
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img src={boardHike} alt=""/>
            </li>
            <li class="splide__slide">
              <img src={OrHike} alt=""/>
            </li>
            <li class="splide__slide">
              <img src={cliff} alt=""/>
            </li>
          </ul>
        </div>
      </div> */}

      



    </div>
  )
}

export default ImageLoader