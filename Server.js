const express = require('express');
const cors = require('cors');
const products = require('./router/products');
const auth = require('./router/Auth')
const { connectDB } = require('./connection/connectDB')
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use("/products" , products )
app.use("/auth" , auth )



if (process.env.NODE_ENV === "production") {
  app.use(express.static("ecommerce/build"));

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ecommerce', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});