import  mongoose from 'mongoose';

const Location = new mongoose.Schema({

    Latitude: {type: Number, required: true},
    Longitude: {type: Number, required: true}
});


export default mongoose.model("Location", Location)