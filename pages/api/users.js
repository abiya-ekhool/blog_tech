// pages/api/users.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('Cluster0'); // Use the correct database name if different

  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const newUser = await db.collection('users').insertOne(bodyObject);
      res.json(newUser.ops[0]);
      break;
    case 'GET':
      const users = await db.collection('users').find({}).toArray();
      res.json({ status: 200, data: users });
      break;
  }
}
