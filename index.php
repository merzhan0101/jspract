<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Модальные изображения</title>
</head>
<body>
    <img src="assets/img/tigr.jpg" alt="My brother is tiger" id="myImg">
    <div id="myModal" class="modal">
        <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
        <img class="modal-content" id="img01">
        <!-- описание изображения -->
        <div id="caption"></div>
    </div>



<script src="assets/js/main.js"></script>
</body>
</html>