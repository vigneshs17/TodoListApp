//models/todo.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for todo items
const todoSchema = new Schema({
    name: {
        type: String,
    },
    done: {
        type: Boolean,
    },
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;