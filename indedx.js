const express = require('express');
const app = express();
const port = 8080;
const premio = Math.floor(Math.random()*10).toString();
const cajas = []
cajas[premio]= true;
app.get('/adivinar/:numero',(req, res)=>{
    if(cajas[req.params.numero]){
        res.send('gano');
    }else{
        res.send('perdio');
    }
})

app.get('/',(req, res) => res.send('hola'));
app.get('/numero', (req, res)=>{
    return res.send(Math.floor(Math.random()*1000).toString());
});

app.get('/parametro/:paran',(req, res)=> {
    console.log('paran'+ req.params.paran);
    res.send(`el usuario eligio ${req.params.paran}`);
})   


app.listen(port, ()=> console.log(`servidor corriendo en puerto: ${port}`));