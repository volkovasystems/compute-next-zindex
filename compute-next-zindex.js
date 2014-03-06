try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "computeNextZIndex",
		[
			"jquery",
			"underscore"
		],
		function construct( ){
			var computeNextZIndex = function computeNextZIndex( parentContainer ){
				if( !( parentContainer instanceof $ ) ){
					throw new Error( "invalid parent container" );
				}

				var nodeList = parentContainer[ 0 ].childNodes;
				var zIndexList = { };
				for( var index = 0; index < nodeList.length; index++ ){
					var node = $( nodeList[ index ] );
					zIndexList[ parseInt( node.css( "z-index" ) ) ) ] = node;
				}
				
				return ( parseInt( _.sortBy( Object.keys( zIndexList ) ).pop( ) ) + 1 );
			};

			base.computeNextZIndex = computeNextZIndex;
			return computeNextZIndex;
		} )
} )( base );