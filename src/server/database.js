const { MongoClient } = require('mongodb');
const { usersModel } = require('./users/model');
const { MONGODB_URL, DATABASE_NAME } = require('./utils/constants');
const { USERS } = require('./utils/constants');

let db;
let client;

exports.connectDb = async () => {
  client = await MongoClient.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db(DATABASE_NAME);
  console.log('Database connected'); // eslint-disable-line no-console
  return usersModel(db);
};

exports.disconnectDb = () => client.close();

exports.getUsers = () => db.collection(USERS);