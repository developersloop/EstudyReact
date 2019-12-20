import mongoose, { mongo } from "mongoose";

// const UserSchema = mongoose.model('User');

const ContactSchema = new mongoose.Schema({
       nome:{
             type:String,
             require:true,
       },
       phone:{
             type:String,
             require:true
       },
       user_id:{
                  type:mongoose.Schema.Types.ObjectId,
                  ref:'User'
            }
       
})


mongoose.model('Contact',ContactSchema);
