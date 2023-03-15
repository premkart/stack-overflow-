import mongoose from"mongoose";

const connectDB = async () => {
    try
    {
        const conn = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser : true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(error);
        process.exit(1);
    }
        };
        export default connectDB