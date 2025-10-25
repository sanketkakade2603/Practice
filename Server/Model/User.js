import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    }, 

     resetPasswordToken: {
        type: String,
    },

    resetPasswordExpiry: {
        type: Date,
    }

}, { timestamps: true ,
     versionKey: false

}); 

   


const User = mongoose.model("User",UserSchema)

export default User