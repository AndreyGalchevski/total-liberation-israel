let dbConnection;

if (process.env.NODE_ENV === "production") {
  dbConnection = {
    url: process.env.DB_URI_PROD,
    secret: process.env.DB_SECRET_PROD
  };
} else {
  dbConnection = {
    url: process.env.DB_URI_DEV,
    secret: process.env.DB_SECRET_DEV
  };
}

module.exports = dbConnection;
