Event.observe( window, 'load', init ) ;

function init() {
	/* Event.observe( 'formulaire', 'submit', recherche ) ; */
	/* Event.observe( 'boutton_envoi', 'click', recherche ) ; */
	/*
	$( 'formulaire' ).request(
		{
			method : 'get',
			parameters : {
				//tags : $F( 'zone_saisie' ),
				method : "flickr.photos.search"
			},
			onComplete : retour_reponse_recherche
		}
	) ;
	*/
}

function recherche() {
	new Ajax.Request(
		'bin/flickr-proxy.php',
		{
			method : 'get',
			parameters : {
				tags : $F( 'zone_saisie' ),
				method : "flickr.photos.search"
			},
			onComplete : retour_reponse_recherche
		}
	) ;
}

function retour_reponse_recherche( reponse ) {
	if( reponse.status == 200 ) {
		var obj = reponse.responseText.evalJSON() ;
		for( var inc = 0; inc < obj.photos.photo.length; inc++ ) {
			//new Insertion.Bottom( document.body, "<div class=\"cadre_img\"><img src=\"http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_t_d.jpg\" alt=\""+photo.id+"\"/></div>" ) ;
			new Ajax.Request(
				'bin/flickr-proxy.php',
				{
					method : 'get',
					parameters : {
						photo_id : obj.photos.photo[ inc ].id,
						method : "flickr.photos.getSizes"
					},
					onComplete : retour_reponse_taille
				}
			) ;
		}
	} else {
		new Insertion.Bottom( document.body, "<p style=\"erreur\">Erreur " + response.status + " " + reponse.statusText + "</p>" ) ;
	}
}

function retour_reponse_taille( reponse ) {
	if( reponse.status == 200 ) {
		var obj = reponse.responseText.evalJSON() ;
		for( var inc = 0; inc < obj.sizes.size.length; inc++ ) {
			var photo = obj.sizes.size[ inc ] ; 
			if( photo.label == "Thumbnail" ) {
				//new Insertion.Bottom( document.body, "<div class=\"cadre_img\"><a href=\"\"><span /><img width=\""+photo.width+"\" height=\""+photo.height+"\" src=\""+photo.source+"\" id=\""+inc+"\"/></a></div>" ) ;
				new Insertion.Bottom( document.body, "<div class=\"cadre_img\"><a href=\"\"><img width=\""+photo.width+"\" height=\""+photo.height+"\" src=\""+photo.source+"\" id=\""+inc+"\"/></a></div>" ) ;
			}
		}
	} else {
		new Insertion.Bottom( $( 'zone_thumbnails' ), "<p style=\"erreur\">Erreur " + response.status + " " + reponse.statusText + "</p>" ) ;
	}
}

