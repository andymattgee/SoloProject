import React from "react";
import {Link,Route, Routes} from "react-router-dom";

//import all components to be used as routes 
import Home from "./components/Home";
import Hikelist from "./components/Hikelist";
import DeleteHike from "./components/DeleteHike";
import UpdateHike from "./components/UpdateHike";
import CreateHike from "./components/CreateHike";
import ShowHike from "./components/ShowHike";
import NotFound from "./components/NotFound";
import ImageLoader from "./components/ImageLoader";

const App = () =>{
    return(
        <>
        <nav style={{textAlign:'center'}}>
            <ul style={{listStylePosition:'inside', listStyleType:'none', backgroundColor:'lavender', margin:'0px'}}>
                <li>Super Cool NavBar</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hikes/create'>Create a new Hike here!</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hikes/create" element={<CreateHike/>}></Route>
            <Route path="/hikes/details/:id" element={<ShowHike/>}></Route>
            <Route path="/hikes/edit/:id" element={<UpdateHike/>}></Route>
            <Route path="/hikes/delete/:id" element={<DeleteHike/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path='/hikes/imageloader/:id' element ={<ImageLoader/>}></Route>
            {/* <Route path="/hikes" element={<Hikelist/>}/> */}
            
        </Routes>    
        </>
    )
};

export default App