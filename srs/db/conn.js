const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Registration',{
    useNewUrlParser: true
}).then(()=>{
    console.log('Connection Successful');
}).catch((e)=>{
    console.log(e)
    console.log('Connection Unsuccessful')
})

