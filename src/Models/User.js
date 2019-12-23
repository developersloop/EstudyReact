const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
         name:{
                type:String,
                require:true 
         },
         lastname:{
                type:String,
                require:true
         },
         idade:{
               type:Number,
               require:true

         },
         email:{
              type:String,
              require:true
         },
         password:{
              type:String,
              require:true
         },
         createdAt:{
              type:Date,
              defaut: Date.now
        },
         contatos:[
              {
                     type:mongoose.Schema.Types.ObjectId,
                     ref:'Contact'
              }
         ]
})

mongoose.model('User',UserSchema);
