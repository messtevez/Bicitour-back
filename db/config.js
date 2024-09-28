const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log('DB conectada')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB