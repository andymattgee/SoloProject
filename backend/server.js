/* eslint-disable no-unused-vars */
import express from 'express'
import{ PORT,DBURL } from "./config.js"; 
import mongoose from 'mongoose';
// import { Hike } from './models/hikeModel.js'; //this will go into controller
import hikesRoute from './routes/hikesRoute.js'; //imports router from hikesRoute.js
import cors from 'cors';


const app = express();

app.use(express.json()); //this is middle ware that will parse incoming JSON requests and put the parsed data in the req.body. Since it is placed before other routes and uses 'app.use' syntax, it will parse all incoming requests. 
//with out this line, req.body would be undefined

//will handle cors if errors pop up, not very specific or safe
app.use(cors());

// this will be more specific for routes and from our server 
// app.use(cors({
//     origin : 'http://localhost:9000',
//     methods : ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders : ['Content-Type'],
// }));


//serves up the homepage 
app.get('/',(req,res) =>{
    // console.log(req);
    return res.status(200).send('This is main/login page, NPM run dev for changes in real time')
});
//serves up secret page
app.get('/test', (req,res) => {
    res.status(200).send('testing 1,2,3');
});
//router that handles all hikes to /hikes
//any request to /hikes will re-route to hikesRoutes.js and be filter accordingly
app.use('/hikes', hikesRoute);


//__________________________commented out routes here_______________________________________
// //route to save hike
// //come back and make into controller/routes 
// app.post('/hikes',async (req,res) =>{
//     try{
//         if(!req.body.name || !req.body.location || !req.body.miles){
//             return res.status(400).send({
//                 message: 'Missing some required data'
//             });
//         }
//         const newHike = {
//             name : req.body.name,
//             location : req.body.location,
//             miles : req.body.miles,
//         };
//         const hike  = await Hike.create(newHike);
//         return res.status(200).send(hike); 
//     } catch (err){
//         console.log(err.message);
//         res.status(500).send({message : err.message});
//     }
    
// });

// //route to get all hikes from db 
// //st up into controller
// app.get('/hikes', async (req,res) =>{
//     try{
//         const hikes = await Hike.find({});
//         return res.status(200).json({ //will return obj of proper w list of hikes being one 
//             count : hikes.length,
//             data : hikes,
//             sample : hikes[0].name,
//         });
//     } catch (err){ 
//         console.log(err.message);
//         res.status(500).send({message : err.message});
//     }
// });
// //route for getting a single book by id
// app.get('/hikes/:id', async (req,res) =>{
//     try{
//         const { id } = req.params;
//         const hike = await Hike.findById(id);
//         return res.status(200).json(hike);
//     } catch (err){ 
//         console.log(err.message);
//         return res.status(500).send({message : err.message});
//     }
// });

// //route for updating a single hike 
// app.put('/hikes/:id', async (req,res) => {
//     try{
//         if(!req.body.name || !req.body.location || !req.body.miles){
//             return res.status(400).send({message :'missing some date from body(name,location,miles'});
//         }
//         const { id } = req.params;
//         const results = await Hike.findByIdAndUpdate(id,req.body);
//         if(!results){
//             return res.status(404).json({message : "hike not found, try diff ID "})
//         }
//         return res.status(200).send({
//             action: `${results.name} hike updated !`,
//         }) //will return message w succ update 
//     } catch(err){
//         console.log(err.message);
//         res.status(500).send({message: "error in update hike"});
//     }
// })

// //route for deleting hike by ID 
// app.delete('/hikes/:id', async (req,res) => {
//     try{
//         // if(!req.body.name || !req.body.location || !req.body.miles){
//         //     return res.status(400).send({message :'missing some date from body(name,location,miles)', req: req.params});
//         // }
//         const { id } = req.params;
//         const results = await  Hike.findByIdAndDelete(id);
//         if(!results){
//             return res.status(404).json({message: "hike not found, check ID"})
//         }
//         return res.status(200).json({message: `${results.name} hike deleted! `})
//     } catch(err){
//         console.log(err.mesage);
//         res.status(500).send({message: "error in delete hike"});
//     }
// })

//__________________________________________________________________________________
//unkown route handler 
app.use('*',(req, res) => { res.sendStatus(404) });

// Global error handler (taken from express unit)
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error $',
      status: 500,
      message: { err: 'An error occurred /Global Error handler$' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
//uses mongoose to connect to DB, if succ will launch/listen on server 
mongoose   
    .connect(DBURL)
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () =>{
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('error w DB');
    });

//____________________________________ image stuff_____________
// const multer  = require('multer')
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });


app.post('/upload-image', upload.single("image"), (req,res) =>{
    console.log(req.body);
    res.send("uploaded!");
});