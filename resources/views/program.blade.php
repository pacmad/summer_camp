<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Програма | Дріада</title>
		<link  rel="icon" type="image/png" sizes="16x16" href="/images/logo.png">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
	</head>
	<body>
		<div id="root"></div>
		<script src="js/app.js"></script>
	</body>
</html>
