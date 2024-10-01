// Suggested code may be subject to a license. Learn more: ~LicenseLog:2963468692.
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://fresheat_mnklm:XmBYlDgkTbauGCet@cluster0.wwdhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const User = mongoose.model('User', { name: String, email: String, phone: BigInt, password: String });




//app config

const app= express()
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(cors())

app.get("/" ,(req,res)=>{
    res.status(200).send("server started ")
})

app.post("/signup", (req, res) => {
  const { name, email, phone, password } = req.body
  const newUser = new User({ name, email, phone, password });

  newUser.save().then(() => console.log('user created'));
})

app.listen(PORT,()=>console.log(`listening on localhost:${PORT}`))  
