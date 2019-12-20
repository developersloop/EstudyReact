const  mongoose  = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodeapi",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
       connect(){
        const db = mongoose.connection;
        return new Promise((resolve,reject) => {
            db.on('error',(err) => {
                   reject(err);
            });
            db.once('open',function(res){
                    resolve(res);
            })
        });
       }
}