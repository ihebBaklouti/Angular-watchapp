//import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const mongodb = require('mongodb');
const url = require('url');

//import models
const Watch = require('./models/watch')
const User = require('./models/user')

//Creation des instances
const app = express();

// Database Name
/* const dbName = 'watchappDB';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/watchappDB';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
}); */

//Connection avec DB
mongoose.connect('mongodb://localhost:27017/watchappDB', { useNewUrlParser: true, useUnifiedTopology: true });

// create application/x-www-form-urlencoded parser: 1:formParser ; 2:jsonParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type,application/json, X-Requested-with");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});



/* app.get('/', (req, res) => {
    console.log('Form app');
    //Insertion de montre
    const watch = new Watch({
        price: 120,
        marque: "festina",
        image: "image",
        description: "pertistant"
    });
    watch.save();
}) */



// http://localhost:3000/api/montres
app.post('/api/watches', (req, res) => {
    // Traitement
    const watch = new Watch({
        price: req.body.price,
        marque: req.body.marque,
        image: req.body.image,
        description: req.body.description
    });
    // Saving document
    watch.save();
    // Send response to FE
    res.status(201).json({
        message: "Montre added successfully"
    });
});

//getAllWatches:
app.get('/api/watches', (req, res) => {
    Watch.find({}, function(err, result) {
        /*    if (err) {
               res.send(err);
           } else {
               res.send(result);
           } */
        res.status(200).json({
            message: "ok",
            watches: result
        })
    });

})

//deleteWatchByID:
app.delete('/api/watches/:id', (req, res) => {
    // Get the documents collection
    console.log(req.params.id);
    Watch.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Deleted successfully");
        }
    });
    res.status(200).json({
        message: "Deleted successfully"
    })
});

// Delete watch by ID
// URL: http://localhost:3000/api/watches/:id
/* app.delete('/api/watches/:id', (req, res) => {

    watch.deleteOne({ _id: req.params.id }).then(
        data => {
            console.log("Delete watch", data);
        }
    )
    res.status(200).json({
        message: "Deleted successfully !!"
    })
}); */



//getWatchByID:
app.get('/api/watches/:id', (req, res) => {
    console.log(req.params.id);
    Watch.findById({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    })
})

// Get watch by ID
// URL: http://localhost:3000/api/watches/:id
/* app.get('/api/watches/:id', (req, res) => {

    Watch.find({ _id: req.params.id }).then(
        watch => {
            if (watch) {
                res.status(200).json(watch);
            } else {
                console.log("Watch not found");
                res.status(404).json({
                    message: "Watch not Found 404 !!"
                })
            }
        }
    )

}); */

// Update watch by ID
// URL: http://localhost:3000/api/watches/:id
app.put('/api/watches/:id', (req, res) => {

    const watch = new Watch({
        _id: req.body._id,
        price: req.body.price,
        marque: req.body.marque,
        image: req.body.image,
        description: req.body.description
    });

    Watch.updateOne({ _id: req.body._id }, watch).then(
        data => {
            if (data) {
                res.status(200).json({
                    message: "Updated successfully !!"
                });
            } else {
                console.log("Error in update");
            }
        }
    )

})


// Search watch by Field
// URL: http://localhost:3000/api/watches/?marque
app.get('/api/watches/:marque', (req, res) => {
    console.log('Search Watch By Mark');

    console.log(req.params.marque);
    Watch.find({ marque: req.params.marque }).then(
        watches => {
            if (watches) {
                res.status(200).json(watches);
            } else {
                console.log("watche(s) not found");
                res.status(404).json({
                    message: "watche(s) not Found 404 !!"
                })
            }
        }
    )
})








module.exports = app;