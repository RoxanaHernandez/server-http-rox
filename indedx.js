const express = require('express');
const app = express();
const port = 8080;
app.get('/',(req, res) => res.send('hola'));


app.listen(port, ()=> console.log(`servidor corriendo en puerto: ${port}`));