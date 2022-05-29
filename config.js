var mongodb = require('mongodb')
var mongodClient = mongodb.MongoClient;
var url = "mongodb+srv://siddhant:#rebirth19@cluster0.bkof1.mongodb.net/?retryWrites=true&w=majority";

module.exports = {url,mongodClient}