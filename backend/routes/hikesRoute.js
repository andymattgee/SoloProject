import express from 'express';

const router = express.Router(); //allows us make a router for any request to /hikes and import to server.js
import { Hike } from '../models/hikeModel.js';

//eventually distinguish routes to another files for middle ware 
//route to save hike
router.post('/',async (req,res) =>{
    try{
        if(!req.body.name || !req.body.location || !req.body.miles){
            return res.status(400).send({
                message: 'Missing some required data'
            });
        }
        const newHike = {
            name : req.body.name,
            location : req.body.location,
            miles : req.body.miles,
        };
        // console.log('new hike -->', newHike);
        const hike  = await Hike.create(newHike);
        return res.status(200).send(`${hike.name} saved!`); 
    } catch (err){
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
    
});

//route to get all hikes from db 
//st up into controller
router.get('/', async (req,res) =>{
    try{
        const hikes = await Hike.find({});
        // console.log(JSON.stringify(hikes));
        return res.status(200).json({ //will return obj of proper w list of hikes being one 
            count : hikes.length,
            data : hikes,
            sample : hikes[0].name,
        });
    } catch (err){ 
        console.log(err.message);
        res.status(500).send({message : err.message});
    }
});
//route for getting a single book by id
router.get('/:id', async (req,res) =>{
    try{
        const { id } = req.params;
        const hike = await Hike.findById(id);
        return res.status(200).json(hike);
    } catch (err){ 
        console.log(err.message);
        return res.status(500).send({message : err.message});
    }
});

//route for updating a single hike 
router.put('/:id', async (req,res) => {
    try{
        if(!req.body.name || !req.body.location || !req.body.miles){
            return res.status(400).send({message :'missing some date from body(name,location,miles'});
        }
        const { id } = req.params;
        const results = await Hike.findByIdAndUpdate(id,req.body);
        if(!results){
            return res.status(404).json({message : "hike not found, try diff ID "})
        }
        return res.status(200).send({
            action: `${results.name} hike updated !`,
        }) //will return message w succ update 
    } catch(err){
        console.log(err.message);
        res.status(500).send({message: "error in update hike"});
    }
})

//route for deleting hike by ID 
router.delete('/:id', async (req,res) => {
    try{
        // if(!req.body.name || !req.body.location || !req.body.miles){
        //     return res.status(400).send({message :'missing some date from body(name,location,miles)', req: req.params});
        // }
        const { id } = req.params;
        const results = await  Hike.findByIdAndDelete(id);
        if(!results){
            return res.status(404).json({message: "hike not found, check ID"})
        }
        return res.status(200).json({message: `${results.name} hike deleted! `})
    } catch(err){
        console.log(err.mesage);
        res.status(500).send({message: "error in delete hike"});
    }
});

export default router;