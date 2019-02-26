<?php
	$_url = "http://" ;

	foreach( $_GET as $_nom_param => $_param ) {
		if( $_nom_param == "farm" ) $_url = $_url . "farm" . $_param . ".static.flickr.com/" ;
		if( $_nom_param == "server" ) $_url = $_url . $_param . "/" ;
		if( $_nom_param == "id" ) $_url = $_url . $_param . "_" ;
		if( $_nom_param == "secret" ) $_url = $_url . $_param . "_" ;
	}

	$_url = $_url . "t_d.jpg" ; 

	$_poignee = fopen( $_url, "r" ) ;

	header( "Content-Type: image/jpeg" ) ;

	while( $_ligne = fgets( $_poignee ) ) echo $_ligne ;

	fclose( $_poignee ) ;
?>
