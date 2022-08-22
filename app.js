import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req,res) => {
    res.send("index page!")
})

app.listen(port, ()=>{
    console.log(`server is open on ${port} port..`);
})