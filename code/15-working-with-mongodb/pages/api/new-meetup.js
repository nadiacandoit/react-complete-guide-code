import { MongoClient } from 'mongodb';

// api routes to allow you to build your own api end points! 
// make api folder in pages. 
// credentials.. 

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // This is secure place to store credentials - not be visible in the client side. 
    const client = await MongoClient.connect(process.env.DB_REQ_URL);

    // get a hold of database - if does not exist, it will be created. 
    const db = client.db();

    // mongoDB is not sql type databaes-
    // It works with collection with holds multiple documents(-name of your choice again). 
    const meetupsCollection = db.collection('meetups');

    // built in query - document is javascript object. 
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    // reefer to node request 
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

// function name does not matter but need to be exported. 
export default handler;
