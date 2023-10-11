//In this part the naming convention doesn't matter much.(Name of the file dbConfig.ts)

import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;     // Once Mongoose has connected it will give you mongoose.connection the string will be available and based in this you can actually listen to variety of events. One such event is 'connection' and every event is being listened by the word '.on'.

        connection.on('connected', () => {
            console.log('MongoDB connected successfully'); //40:52
        })

        connection.on('error',(err) => {
            console.log('MongoDB connection error. Plese make sure MongoDB is running.'+ err);
            process.exit();
        })
        
    } catch (error) {
        console.log('Something went wrong');
        
    }
}