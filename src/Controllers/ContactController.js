const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

// id do usuario logado
const id = "5dfcf188bcea86a165601d8d";
module.exports = {
            async index(req,res){
                const contacts = await Contact.find()
                return res.json(contacts);s
           },
           async store(req,res){
                 const { nome,phone } = req.body;
                 const contacts = await Contact.create({
                          nome,
                          phone,
                          user_id:id

                          
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
                  const contact = await Contact.findById(id).populate('user_id');
                  return res.json(contact.user_id);
           }
           
}