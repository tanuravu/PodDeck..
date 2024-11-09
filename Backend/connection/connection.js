const mongoose=require ("mongoose");

const conn=async() =>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("Database connected");
    }
    catch(e){
        console.log(error);
    }
};

conn();