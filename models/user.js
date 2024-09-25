const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: (true, 'username tidak ada'),
    },
    password: {
        type:String,
        required: (true, 'password tidak ada'),
    },
})



module.exports = mongoose.model('User', userSchema)