const express = require("express")
const app = express()
let todos = [
    {name: "wash truck",
    description: "wash it",
    price: 1,
    completed: false,
    _id: "1"},
    {name: "walk dog",
    description: "walk him",
    price: 0,
    completed: false,
    _id: "2"},
    {name: "mow lawn",
    description: "mow it",
    price: 0,
    completed: false,
    _id: "3"}
]

app.use(express.json())

app.get("/todos", (req, res) => {
    res.send(todos)
})

app.get("/todos/:_id", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)

    res.send(foundTodo)
})

app.post("/todos", (req, res) => {
    const newTodo = req.body
    newTodo._id = Math.random().toString()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete("/todos/:_id", (req, res)  => {
    const foundTodo =todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedDB
    res.send(`deleted the todo by id number ${foundTodo._id}`)
})

app.put("/todos/:_id", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    const updateObj = req.body
    const updatedTodo = Object.assign(foundTodo, updateObj )
    const updatedDB = todos.map(todo => todo._id === req.params._id ? updatedTodo : todo)
    todos = updatedDB
    res.sendDate(updatedTodo)
})



app.listen(7000, ()=> {
    console.log("server is good to roll on 7gs")
})