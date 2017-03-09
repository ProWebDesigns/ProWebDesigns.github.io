<?php 
	define('v_home','Home');
	define("v_portfolio","Portfolio");
	define("v_contacts","Contacts");
	echo v_home;
 ?>
<!DOCTYPE html>

<html>

	<head>
		<meta charset="UTF-8">
		<title>Languages PHP</title>
		<link rel="icon" href="images/icon.jpg" alt="Icon.jpg" />
		<link rel="stylesheet" type="text/css" href="css/style.css">
		
	</head>

	<body>
		<header>
			<H1>prueba de mensajes en PHP</H1>
			<br>
			<h2>
				<?php 
					echo v_home;
					echo "Texto PHP";
				?>
			</h2>
		</header>
	</body>
</html>
  
