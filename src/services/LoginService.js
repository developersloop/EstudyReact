var json = require('jsonwebtoken');

module.exports = {
       authorizaton(req,res,id){
         const expiresIn = 300;
          var token = json.sign({ id },process.env.SECRET,{
                expiresIn:300
          });

          if(!token){
               return res.status(500).json("Not possible generate token!");
          }

          const payload = {
                  auth:true,
                  token:token,
                  expiresIn:(expiresIn / 60) < 1 ? "1 minuto" : `${(expiresIn / 60)} minutos` 
          }


          return payload;
       },

}