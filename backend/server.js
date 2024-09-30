// Suggested code may be subject to a license. Learn more: ~LicenseLog:2963468692.
import express from 'express'
import cors from 'cors'


//app config

const app= express()
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(cors())

app.get("/" ,(req,res)=>{
    res.status(200).send("server started ")
})

app.listen(PORT,()=>console.log(`listening on localhost:${PORT}`))  
