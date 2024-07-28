const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 6001;
const { ObjectId } = require('mongodb');
require('dotenv').config()
// console.log(process.env.DB_USER)

//middleware
app.use(cors());
app.use(express.json());

//lpgh0kP9qJk1KdcZ
// namigr78



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://namigr78:lpgh0kP9qJk1KdcZ@demo-foodi-cluster.dms3xao.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodi-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

   
    await client.connect();

    //database and collections
    const menuCollections = client.db("demo-foodi-client").collection("menus")
    const cartCollections = client.db("demo-foodi-client").collection("cartItems")

    //all menu items operations
    app.get('/menu', async(req, res) => {
        const result = await menuCollections.find().toArray();
        res.send(result)
    })


    // all cart operations


    //posting cart to db
    app.post('/carts',async(req,res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result)

    })


    //get cart using email
    app.get('/carts',async(req,res) => {
      const email = req.query.email;
      const filter = {email: email};
      const result = await cartCollections.find(filter).toArray();
      res.send(result)

    })

// Get specific cart
app.get('/carts/:id', async (req, res) => {
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const result = await cartCollections.findOne(filter);
  res.send(result);
})

// Delete cart
app.delete('/carts/:id', async(req, res) => {
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)}
  const result = await cartCollections.deleteOne(filter);
  res.send(result);
})

//update carts qunatity
   app.put("/carts/:id", async(req, res) => {
    const id = req.params.id;
    const {quantity} = req.body
    const filter ={_id: new ObjectId(id)};
    const options ={upsert: true};

    const update =
    {
      $set:{

        quantity: parseInt(quantity,10),

    },
  };
  const result = await cartCollections.updateOne(filter, update, options);



   })
  




    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})