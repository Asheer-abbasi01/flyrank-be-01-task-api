const express = require('express');
const app = express();
const PORT = 3000;


tasks = ["Task 1", "Task 2", "Task 3"];

// Without middleware
app.get('/', function (req, res) {
    res.json({
         "user": 'geek', 
         "message": 'Hello World',
         "version": '0.1.0'
     } );
});

app.get('/tasks', function (req, res) {
    res.json({
        "tasks": tasks
        
    });
});
app.get('/health', function (req, res) {
    res.json({status: 'ok'});
})


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});