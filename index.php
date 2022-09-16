<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>JAVA'S</title>
</head>
<body>

    <div class="block1">
        <p>Верхний левый угол
            <input type="range" id="rtl" min="0" max="100" value="0" oninput="fun1()"><!-- RangeTopLeft -->
            <input type="text" id="ttl" value="0"><!-- TextTopLeft -->
        </p>
        <p>Верхний правый угол
            <input type="range" id="rtr" min="0" max="100" value="0" oninput="fun1()"><!-- RangeTopLeft -->
            <input type="text" id="ttr" value="0"><!-- TextTopLeft -->
        </p>
        <p>Нижний правый угол
            <input type="range" id="rbr" min="0" max="100" value="0" oninput="fun1()"><!-- RangeTopLeft -->
            <input type="text" id="tbr" value="0"><!-- TextTopLeft -->
        </p>
        <p>Нижний левый угол
            <input type="range" id="rbl" min="0" max="100" value="0" oninput="fun1()"><!-- RangeTopLeft -->
            <input type="text" id="tbl" value="0"><!-- TextTopLeft -->
        </p>
    </div>
    <div id="block"></div>
    

    <script src="assets/js/main.js"></script>
</body>
</html>