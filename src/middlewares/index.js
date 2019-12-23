var json = require('jsonwebtoken');
export const verifyJWT = (req,res,next) => {
       var token = req.headers['authorization'];

       if(!token) { 
             return res.status(401).send({
                   auth:false,
                   message:'No token provided'
             })
       }

       json.verify(token,process.env.SECRET,function(err,decoded){
            if(err) return  res.status(500).send({
                  auth:false,
                  message:'Falha na autentificação'
            })

            req.userId = decoded.id;
            next();
       })
}