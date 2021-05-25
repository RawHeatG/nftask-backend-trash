const mongoose = require('mongoose');

async function initializeDBConnection() {
    try{
        await mongoose.connect("mongodb+srv://rawheat:CGekQOXgxVyZLxXj@nftbazar.z2do5.mongodb.net/nftube", {useNewUrlParser: true, useUnifiedTopology: true})

        console.log("Successfully connected to Monogo")
    }catch(error){
        console.error("mongoose connection failed...", error)
    }
}

module.exports = { initializeDBConnection }