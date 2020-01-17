const express = require('express'), 
    stopCtrl = require('./controllers/stopCtrl'),
    cors =require('cors'), 
    app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get('/api/stops',stopCtrl.getAllStops);
app.post('/api/stop', stopCtrl.addStop);
app.put('/api/stop/:id', stopCtrl.editStop); 
app.delete('/api/stop/:id',stopCtrl.deleteStop); 




const port = 3434; 
app.listen(port, () => console.log(`Running on ${port}`)); 