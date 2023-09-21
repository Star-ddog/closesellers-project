require('dotenv').config();

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = require('./post');

const connectDB = require('./db');
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());

app.use(cors(
	{
		origin:["https://closeseller-front.vercel.app"],
		methods:["POST", "GET"],
		credentials:true
	}
));


	Item.createIndexes();

app.get("/", function (req, res) {

	res.send("server is working fine")

	})

app.post('/save', async (req, res) => {

	try {
	  const newItem = new Item(req.body);
	  let result = await newItem.save();
	  result = result.toObject();
	  if (result){
		
		res.send(req.body);
		
		console.log(result)
	  }else{
		console.log("user alrEADY EXITED")
	  }
	  
	} catch (error) {
	  res.status(500).json({ error: 'Error saving data' });
	  console.log(error)
	}
  });


app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
  });
