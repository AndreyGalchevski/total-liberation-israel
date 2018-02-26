let dbConnection

if (process.env.NODE_ENV === 'production') {
    dbConnection = {
        url: 'mongodb://heroku_4jxv0rrc:ruaildt1fbrf2s3minaguujvq8@ds221028-a0.mlab.com:21028,ds221028-a1.mlab.com:21028/heroku_4jxv0rrc?replicaSet=rs-ds221028',
        secret: 'yoursecret'
    }
} else {
    dbConnection = {
        url: 'mongodb://admin:1234@ds259865.mlab.com:59865/alf-israel',
        secret: 'yoursecret'
    }
} 

module.exports = dbConnection