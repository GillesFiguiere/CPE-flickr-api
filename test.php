<?php
	$_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=447f0b055ac0f82ec430ec576da1b322&nojsoncallback=1&tags=voiture" ;

	$_poignee = fopen( $_url, "r" ) ;
	$_poignee_2 = fopen( "test", "w" ) ;

	$_i = 0 ;

	while( $_ligne = fgets( $_poignee ) ) {
		fputs( $_poignee_2, $_ligne ) ;
		$_i++ ;
	} ;

	echo $_i ;

	fclose( $_poignee ) ;
	fclose( $_poignee_2 ) ;
?>
