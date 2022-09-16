<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Конвертер</title>
</head>
<body>
    
    <!-- Ковертер -->
    <h1>Money Converter</h1>
    <p>
        <label>$</label>
        <input type="number" id="inputdol" placeholder="$" oninput="moneyConverter(this.value)" onchange="moneyConverter(this.value)">
    </p>
    <p>KZT: <span id="outputkzt"></span></p>



<script src="assets/js/main.js"></script>
</body>
</html>