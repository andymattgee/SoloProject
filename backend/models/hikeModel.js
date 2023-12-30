import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//basic schema that contains name,location, miles, and time stamps
const HikeSchema = new Schema (
    {
    name: {type: String, required: true},
    location: {type: String, required: true},
    miles: {type: Number, required: true},
    },
    {
    timestamps : true,
    }
);

export const Hike = mongoose.model('Hike', HikeSchema);

