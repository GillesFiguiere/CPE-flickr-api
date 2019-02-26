Event.observe( window, 'load', function() {

	new Ajax.Autocompleter( 'zone_saisie_1', 'zone_suggestion_1', 'bin/suggestion.php' ) ;

} ) ;
