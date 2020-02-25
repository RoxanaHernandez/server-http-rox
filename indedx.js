const express = require('express');
const app = express();
const port = 8080;
app.get('/',(req, res) => res.send('hola'));
app.get('/numero', (req, res)=>{
    return res.send(Math.floor(Math.random()*1000).toString());
});



app.listen(port, ()=> console.log(`servidor corriendo en puerto: ${port}`));