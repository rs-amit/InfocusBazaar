const mongoose = require("mongoose");

const connectionUrl = "mongodb+srv://amit852:Philanthropy@cluster0.ufk6o.mongodb.net/amazondatabase?retryWrites=true&w=majority";

const connectDB = async() => {
  await mongoose.connect(connectionUrl,{
     useUnifiedTopology: true,
     useNewUrlParser: true,
  }).then(response=>console.log('database successfully connected'))
  .catch(err=>console.log(`connection fail : ${err}`))
}

module.exports = { connectDB };
