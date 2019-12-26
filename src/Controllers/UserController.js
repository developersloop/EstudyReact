const mongoose  = require("mongoose");
const User  = mongoose.model('User');
const { validationResult } = require('express-validator');
const jwtService = require('../services/LoginService');
const bcrypt = require('bcrypt');
const storage = require('node-sessionstorage');
const Contact = mongoose.model('Contact')

module.exports = {
            //
            async register(req,res){
                  const { name,lastname,idade,email,password } = req.body;
                  let pass = await bcrypt.hash(password,10);

                  const registers = await User.create({
                        name,
                        lastname,
                        idade,
                        email,
                        password:pass       
                  })
                  // guard token in locastorage
                  return res.json(registers);
            },

            async login(req,res,next){

                  const err = validationResult(req);

                  if (!err.isEmpty()) {
                        res.status(422).json({ errors: err.array() });
                        return;
                  }

                  const { email,password } = req.body;

                  // 1.0 verificacao em dois nivies 

                  // 1.1 nivel email
                  const registers = await User.findOne({
                        email,
                  })

                  if(registers === null){
                        return res.status(401).send('User not Found');
                  }

                  // 1.2 nivel password
                  const compare = await bcrypt.compare(password,registers.password);
                  storage.setItem('user_id',registers._id);


                  if(compare){
                        const id = registers._id
                        return res.json(jwtService.authorizaton(req,res,id));
                  }

                  res.status(401).send({
                           auth:false,
                           message:'Dados inválidos!'
                  });
            },
      
            async index(req,res){
                  const users = await User.find();
                  return res.json(users);
            },
            async show(req,res){
                  const id = req.params.id;
                  const contatos = await Contact.find({user_id:id});
                  const user = await User.findById(id);
                  // console.log(user);
                  return res.json({
                           contatos,
                           user,
                           
                  });
            },

}