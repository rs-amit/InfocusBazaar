const mongoose = require('mongoose');
require('mongoose-type-url');

const ProductSchema = new mongoose.Schema({   
  name: {
    type: String,
    required: "Cannot enter a product without name, please enter product name",
  }, 
  price: {
    type: Number,
    required: "Cannot enter a product without price, please enter price of the product",
  },
  modelNo:{
    type: Number,
    required: "Cannot enter a product without modelNo, please enter modelNo of the product",
    unique: true
  },
  imageUrl:{
    type: mongoose.SchemaTypes.Url,
    required: "Cannot enter a product without URL, please enter URL of the product",
  },
  description:{
    type: String,
    minLength:"Cannot enter a product without discription, please enter discription of the product",
  },
  countInStock:{
    type:Number,
    required:"Cannot enter a product without countInStock value , please enter countInStock value of the product",

  },
  inStock:{
    type:Boolean,
    required:"Cannot enter a product without inStock value , please enter inStock value of the product",
  },
  fastDelivery:{
     type:Boolean,
     required:"Cannot enter a product without fastDelivery value , please enter fastDelivery value of the product",
  },
  rating:{
    type:Number,
    required:"Cannot enter a product without rating, please enter rating of the product",
  }
  });

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product }

