const mongoose= require('mongoose');
const mongoUri="mongodb://localhost:27017"
mongoose.set('strictQuery', true);
const connectToMongo = () =>{
    mongoose.connect(mongoUri,()=>{
        console.log("Connected to mongo successfully");
    })
}
module.exports = connectToMongo;