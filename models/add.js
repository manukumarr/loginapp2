var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');
var mongo=require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var permission=mongoose.connect('mongodb://localhost:27017/contact',{
    useMongoClient:true,
});
var url = "mongodb://localhost:27017/";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("contact");
   var myobj = [
    
    { devicename: 'abc', amount: '10000', emi:'2000'},
    { devicename: 'def', amount: '15000', emi:'3000'},
    { devicename: 'ijk', amount: '20000', emi:'4000'},
    { devicename: 'xyz', amount: '10000', emi:'2000'},
    { devicename: 'pqr', amount: '15000', emi:'3000'},
    { devicename: 'mno', amount: '10000', emi:'4000'},


   
  ];
  dbo.collection("pre").insertMany(myobj, function(err, res) {
    //if (err) throw err;
    //console.log("Number of documents inserted: " );
    db.close();
  });
});




var UserSchema= mongoose.Schema({
    DeviceName:{
        type:String,
        index:true
    },
    DeviceId:{
        type:String
    },
    Dop:{
        type:String
    }

});

var User1=module.exports=mongoose.model('User1',UserSchema);

/*module.exports.createUser=function(item,err){
    var newUser = new User1(req.body);
 newUser.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
}*/

module.exports.createUser=function(newUser,callback){
           newUser.save(callback);
        };


module.exports.getUserByDeviceName=function(DeviceName,callback){
    var query={DeviceName:DeviceName};
    User1.findOne(query,callback);
}



//console.log(getUserByDeviceId);

/*module.exports.comparePassword=function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null,isMatch);
        
    });
}*/