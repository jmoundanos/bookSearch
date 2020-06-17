const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    authors: [{type: String, required: true}],
    description: {type: String},
    image: {type: String, trim: true},
    link:{type: String, trim: true}
})
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;