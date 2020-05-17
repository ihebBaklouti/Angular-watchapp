const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({

    price: { type: Number, required: true },
    name: String,
    marque: String,
    image: String,
    image2: String,
    description: String
});

//Class Watch:
const watch = mongoose.model('Watch', watchSchema);
//const watch = mongoose.model( le nom de l'objet/model c'est :'Watch', watchSchema);
//le nom de la collection dans la partie backend prendera le meme nom de l'objet avec s : watchs


//export :
module.exports = watch;