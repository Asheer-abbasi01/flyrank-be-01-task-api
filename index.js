const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

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

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});