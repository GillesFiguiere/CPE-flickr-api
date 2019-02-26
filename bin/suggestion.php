<?php

	$_poignee = fopen( "../data/communes_74.csv", "r" ) ;

	echo "<ul>" ;

	while( $_ligne = fgetcsv( $_poignee, null, ";", "\"" ) ) {
		if( preg_match( "/^".$_POST[ "zone_saisie_1" ]."/i", $_ligne[ 2 ] ) ) {
			echo "<li>".$_ligne[ 2 ]."<span class=\"informal\"> ".$_ligne[ 1 ]."</span></li>" ;
		}
	}

	echo "</ul>" ;

	fclose( $_poignee ) ;

?>
