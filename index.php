<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>ToDo</title>
</head>
<body>
    
    <!-- Список задач -->
    <div id="myDIV" class="header">
        <h2>To Do app</h2>
        <input type="text" id="myInput" placeholder="Title">
        <span class="addBtn" onclick="newElement()">Add</span>
    </div>
    <ul id="myUL">
        <li class="checked">Task 1</li><!-- checked=выполнен, галочка -->
        <li>Task 2</li>
        <li>Task 3</li>
        <li>Task 4</li>
        <li>Task 5</li>
    </ul>



<script src="assets/js/main.js"></script>
</body>
</html>