const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 6001;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// const { ObjectId } = require('mongodb');
require('dotenv').config()
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





// jwt authentication
app.post('/jwt', async(req, res) => {
  const user = req.body;
  const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1hr'
  })
  res.send({token});
})

// verify jwt token middleware

const verifyToken = (req, res , next) =>{
  console.log(req.headers.authorization)
}




// import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes')

app.use('/menu', menuRoutes)
app.use('/carts',cartRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello Future Billionaire NamiG')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})