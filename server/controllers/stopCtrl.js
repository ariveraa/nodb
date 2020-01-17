const stops = []; 
let id = 0; 

module.exports = {
    getAllStops: (req,res) => {
        res.status(200).send(stops)
    },
    addStop: (req,res) => {
        const {name, stateName, date} = req.body; 
        const stopObj = { 
             name,  
             date, 
             stateName,
             id: id++
        }
        stops.push(stopObj); 
        res.status(200).send(stops)
    },
    editStop: (req, res) => {
        const {id} = req.params; 
        const {name,stateName,date} = req.body; 
        const index = stops.findIndex(element => element.id === +id);
        stops[index].name = name; 
        stops[index].stateName = stateName; 
        stops[index].date = date; 
        res.status(200).send(stops)
    },
    deleteStop:(req,res) => {
        const {id} = req.params; 
        const index = stops.findIndex(element => element.id === +id);
        stops.splice(index,1);
        res.status(200).send(stops); 
    }
}