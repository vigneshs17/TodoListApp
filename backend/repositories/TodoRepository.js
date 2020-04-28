//repositories/TodoRepository.js

const Todo = require('../models/Todo.js');
class TodoRepository {
    constructor(model) {
        this.model = model;
    }

    //create a new todo
    create(name) {
        const newTodo = {name, done:false};
        const todo = new this.model(newTodo);

        return todo.save(); 
    }

    //return all todos
    findAll() {
        return this.model.find();
    }

    //find todo by id
    findById(id) {
        return this.model.findById(id);
    }

    //delete todo
    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }

    //update todo
    updateById(id, object) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, { $set: {name: object.name, done: object.done}});
    }
}

module.exports = new TodoRepository(Todo);