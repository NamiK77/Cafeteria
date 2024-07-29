const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 6001;
const mongoose = require('mongoose');
// const { ObjectId } = require('mongodb');
// require('dotenv').config()
// console.log(process.env.DB_USER)

//middleware
app.use(cors());
app.use(express.json());

//0MMmoJMBStYbOjO9
//namigr78

//mongodb configuration
mongoose.connect('mongodb+srv://namigr78:0MMmoJMBStYbOjO9@demo-foodi-client.1fsnjh0.mongodb.net/demo-foodi-client?retryWrites=true&w=majority&appName=demo-foodi-client').
then(console.log("Mongo db connected sucessfully")).
catch((error) => console.log("Error  connection",error));


// import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
app.use('/menu', menuRoutes)
app.use('/carts',cartRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})