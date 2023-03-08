import mongoose from 'mongoose';

const connectDB = (url) => {

    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('\x1b[32m%s\x1b[0m', 'Connected to MongoDB...')) // green
        .catch((err) => {
            console.error('\x1b[31m%s\x1b[0m', 'Failed to connect to MongoDB...'); // red
            console.error(err);
        });
};

export default connectDB;
