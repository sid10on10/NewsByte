var mongodb = require('mongodb')
var mongodClient = mongodb.MongoClient;
var url = "mongodb+srv://siddhant:qwerty123@cluster0.bkof1.mongodb.net/?retryWrites=true&w=majority";

module.exports = {url,mongodClient}