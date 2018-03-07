const MongoClient = require('mongodb').MongoClient;

let db = null;

const getDb = () => db;

const connectToDb = (connectionString, next) => {
  MongoClient.connect(
    connectionString,
    {
        reconnectTries: 60,
        reconnectInterval: 1000
    },
    (err, database) => {
      db = database.db("blogg");
      if (!err) {
        next();
      } else {
        throw new Error("Cannot connect to database");
      }
    });
}

module.exports = {connectToDb, getDb};
