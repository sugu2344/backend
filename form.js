const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser');
const PORT = 3005;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://suganesh234:N200mpQDgiisXUV0@formdata.9qmpklh.mongodb.net/persondetails', {
 })
.then(() => {
    console.log('Connected to MongoDB');
}).

catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
});
const userSchema = new mongoose.Schema({
    fname:{
        type:String, 
        // required:true
    },
    mail:{
      type:String,
    //   required:true
  },
  number:{
    type:Number,
    // required:true
 },
 website:{
  type:String,
//   required:true
 },
 contactName:{
  type:String,
//   required:true
 },
 contactPhone:{
  type:Number,
//   required:true
},
contactMail:{
  type:String,
//   required:true
},
notes:{
  type:String,
//   required:true
},
type:{
  type:String,
//   required:true
},
category:{
  type:String,
//   required:true
},
percentage:{
  type:Number,
//   required:true
},
activeFrom:{
  type:String,
//   required:true
},
// logo:{
//   type:String,
// //   required:true
// },

criticalAccount:{
  type:String,
//   required:true
},
paymentOptions:{
  type:String,
//   required:true
}
  });
  const users = mongoose.model('user',userSchema);
  app.get('/', function (req, res) {
    res.send('Hello i am new to backend')
      users.find().then((data)=>{
      
        console.log(data);
    })
  })
  app.post('/',async function (req, res) {
    console.log( 'Received data:',req.body)
      var userdata = new users({
        fname:req.body.fname,
        mail:req.body.mail,
        number:req.body.number,
      website:req.body.website,
      contactName:req.body.contactName,
      contactPhone:req.body.contactPhone,
      contactMail:req.body.contactMail,
       notes:req.body.notes,
       type:req.body.type,
       category:req.body.category,
       percentage:req.body.percentage,
       activeFrom:req.body.activeFrom,
      //  logo:req.body.logo,
       criticalAccount:req.body.criticalAccount,
       paymentOptions:req.body.paymentOptions
    });
      userdata.save().then(()=>{
        res.render('register');
    })
  })
app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`)
} );