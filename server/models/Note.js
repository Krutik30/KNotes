const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note',NoteSchema);