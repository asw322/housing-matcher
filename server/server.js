// TODO: Port routing into api.js
// import * as api from "./api/api.js";

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/express_backend', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 
  
