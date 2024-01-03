import React from "react";
import {Route, Routes} from "react-router-dom";

//import all components to be used as routes 
import Home from "./components/Home";
import Hikelist from "./components/Hikelist";
import DeleteHike from "./components/DeleteHike";
import UpdateHike from "./components/UpdateHike";
import CreateHike from "./components/CreateHike";
import ShowHikes from "./components/ShowHike";

const App = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hi" element={<Home />}/>
            <Route path="/hikes/create" element={<CreateHike/>}></Route>
            <Route path="/hikes/details/:id" element={<ShowHikes/>}></Route>
            <Route path="/hikes/edit/:id" element={<UpdateHike/>}></Route>
            <Route path="/hikes/delete/:id" element={<DeleteHike/>}></Route>
            <Route path="/hikes" element={<Hikelist/>}/>
            
        </Routes>    
    )
};

export default App