const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    title: String,
    fromdate: { type: Date, default: Date.now },
    todate: { type: Date, default: Date.now },
    state: Number, 
    items: [{
        type: Schema.ObjectId,
        ref: 'Products',
    }],
});

const model = mongoose.model('Requestlist', mySchema);
module.exports = model;