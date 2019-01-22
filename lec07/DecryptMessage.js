const app = require('express');
const crypto = require('crypto');
const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://localhost:27017');

client.connect(function(err){
    const db = client.db('revealMessage');
    const colllection = db.collection('homework7');

    colllection.findOne({}, function(err, doc){
        //console.log(doc);
        client.close();
        if(doc){
            const decipher = crypto.createDecipher("aes256", 'asaadsaad');
            const decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
            console.log(`Decrypted message: ${decrypted}`);
        }
    });
    //console.log('Done');
});