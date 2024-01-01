const { createConnection } = require("mongoose");

const dbConnection = createConnection(process.env.MONGO_URI, {
  dbName: "adlee-fried-chicken-db",
});

module.exports = { dbConnection };
