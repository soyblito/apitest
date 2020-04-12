const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    createDate: { type: Date, default: Date.now },
    modDate: { type: Date, default: Date.now },
    state: Number, 
    description: String,
    price: Number,
    sizex: Number,
    sizey: Number,
    sizez: Number,
    color: Number,
    size: Number,
    stock: Number,
    cat: Number,
    img_home: String,
    img_featured: String,
    link_mp: String,
    link_ig: String,
});

const model = mongoose.model('Products', mySchema);
module.exports = model;

