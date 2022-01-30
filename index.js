import express from 'express';
import mongoose from 'mongoose';
import Location from './models/LocationInfo.js';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.static("./client/build"));


const DB_URL = `mongodb+srv://Gevorg:LocusTest@cluster0.immaq.mongodb.net/locustest?retryWrites=true&w=majority`;

app.post("/getLocation", async (req,res) => {
    const {Lat, Long} = req.body;
    const address = await Location.create({Latitude: Lat, Longitude: Long});
    return res.status(200).json("server is working")
});


app.get("/getAllLocations", async (req,res) => {

    const addresses = await Location.find();
    return res.status(200).json(addresses)

})

async  function start () {
    mongoose.connect(DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    app.listen(PORT,() => {

    console.log("Server work")
})

    try {
        mongo
    } catch (error) {
        
    }
}


start(

)