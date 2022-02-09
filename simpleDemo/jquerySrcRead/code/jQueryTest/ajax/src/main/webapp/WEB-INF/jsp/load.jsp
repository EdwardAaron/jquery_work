<html>
<head>
    <title>Welcome</title>
    <link href="/css/main.css" rel="stylesheet">
    <script src="/js/jquery.js"></script>
    <script src="/js/load().js"></script>
</head>
<body>
<div>
    <p>jQuery.fn.load(url,[data,complete])</p>
    <p>
        :Load data from the server and place the returned HTML into the matched elements<br>
    </p>
    <p>
        data:string|object A plain object or string that is sent to the server with the request
    </p>
    <p>complete:Function( String responseText, String textStatus, jqXHR jqXHR )
        A callback function that is executed when the request completes.</p>
</div>
<div>
    <p id="example"></p>
    <p id="example2"></p>
    <div>
        <label>selector:</label>
        <select id="select"></select>
    </div>
</div>
</body>
</html>