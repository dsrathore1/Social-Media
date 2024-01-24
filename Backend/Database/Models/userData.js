import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    email:{
        type: String,
        require:true,
    }
});