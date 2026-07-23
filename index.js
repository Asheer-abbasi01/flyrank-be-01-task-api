const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

const app = express();
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;

// Sample data
const tasks = [
  {
    id: 1,
    title: "Learn Express",
    done: false
  },
  {
    id: 2,
    title: "Build CRUD API",
    done: false
  },
  {
    id: 3,
    title: "Push to GitHub",
    done: true
  }
];

// Without middleware
//GET method
app.get('/', function (req, res) {
    res.json({ 
        message: 'Welcome to the Task API',
     } );
});

app.get('/tasks', function (req, res) {
    res.json({
        tasks: tasks
    });
});

app.get('/tasks/:id', function (req, res) {

    const taskID = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskID);

    if (!task) {
        res.status(404).json({
            message: 'Task not found'
        })
    } else {
        res.status(200).json({
            task: task
        })
    }
    });


//POST method
app.post('/tasks', function (req, res) {

    console.log(req.body); 
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        done: false
    }

    tasks.push(newTask);

    res.status(201).json( {
        message: 'Task is created successfully',
        task: newTask

    })
})

//
app.put('/tasks/:id', function (req, res) {

    const taskID = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskID);

    if (!task) {
        res.status(404).json({
            message: 'Task not found'
        })
    } else {
        task.title = req.body.title;
        task.done = req.body.done;
        res.status(200).json({
            message: 'Task is updated successfully',
            task: task
        })
    }
})


//DELETE method
app.delete('/tasks/:id', function (req, res) {

    const taskID = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskID);

    if( taskIndex === -1){
        res.status(404).json({
            message: 'Task not found'
        })
    } else {
        tasks.splice(taskIndex, 1);
        res.status(200).json({
            message: 'Task is deleted successfully'
        })
    }
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});