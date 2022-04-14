const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');

const port = 8080;

app.use('/public', static);
app.use(express.urlencoded({ extended: true }));




// logging middle ware
app.use(async(req,res,next)=>{
    let currentTime = new Date().toUTCString();
    let method = req.method;
    let route = req.originalUrl;

    //let authenticated = undefined;
    // Un Comment this part once Sessions are done
    //if (req.session.user) authenticated = true;
    //else authenticated = false; 

    //console.log(`Time: ${currentTime}, Method: ${method}, Route: ${route}, userAuth Status: ${authenticated}`) 
    console.log(`Time: ${currentTime}, Method: ${method}, Route: ${route}`);
	next();
} )

configRoutes(app);

app.listen(8080, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
  });
