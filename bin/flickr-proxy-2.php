<?php
	$_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=447f0b055ac0f82ec430ec576da1b322&nojsoncallback=1" ;

	foreach( $_GET as $_nom_param => $_param ) $_url = $_url . "&" . $_nom_param . "=" . $_param ;

	echo file_get_contents( $_url ) ;
?>
