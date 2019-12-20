const mongoose  = require("mongoose");
const User  = mongoose.model('User');
const Contact = mongoose.model('Contact');

module.exports = {
            async index(req,res){
                  const users = await User.find();
                  return res.json(users);
            },
            async store(req,res){
                  const {contatos,user} = req.body;
                  const contat = await Contact.create(contatos);
                  const usuario = await User.create({
                        name:user.name,
                        lastname:user.lastname,
                        idade:user.idade,
                        createdAt:Date.now(),
                        contatos:contat._id
                  });
                  return res.json(usuario);
            },
            async show(req,res){
                  const id = req.params.id;
                  const user = await User.findById(id).populate('contatos')
                  const { contatos,
                         _id,
                         name,
                         lastname,
                         idade } = user;
                   
                  return res.json({
                           user:{
                                   id:_id,
                                   name,
                                   lastname,
                                   idade
                           },
                           contatos,
                  });
            },

}