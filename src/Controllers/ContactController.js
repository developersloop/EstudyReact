const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
const storage = require('node-sessionstorage');

module.exports = {
            async index(req,res){
                const contacts = await Contact.find()
                return res.json(contacts);s
           },
           async store(req,res){
                 const { nome,phone } = req.body;

            //      console.log(req.body);

                 // recuperando id do usuario logado
                 const user_id = storage.getItem('user_id');

                 const contacts = await Contact.create({
                          nome,
                          phone,
                          user_id,
                 });
                 return res.json(contacts);
           },

           async show(req,res){
                   const id = req.params.id;
                   const contact = await Contact.findById(id);
                   return res.json(contact);
           },
           async userByContact(req,res){
                  const id = req.params.id;
                  const contatos = await Contact.find({
                           user_id:"5dfcf188bcea86a165601d8d"
                  }).populate('user_id');
                            
                  
                  return res.json(contatos);
           }
           
}