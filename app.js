const express = require("express")
const path = require('path');
const app = express();
const port = 80;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))// for serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')//set the  engine as pug
app.set('views', path.join(__dirname, 'views'))//templateset the view directory

//ENDPOINTS
app.get("/", (req, res)=>{
    const con = "This is the best content on the internet so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render("index.pug", params);
}) 


// START THE SERVER
app.listen(port, ()=>{ 
    console.log(`This application started successfully on port ${port}`)
})              