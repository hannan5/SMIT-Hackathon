const mongoose = require('mongoose');
const connectionString = ''

connectDB = (url) => {
    return mongoose.connect(url)
}
module.exports = connectDB;