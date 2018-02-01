
module.exports = function( sails ) {

	const install = require( './lib/install.js' );
	
	gladys.on( 'ready', function(){
		init().catch( sails.log.warn );
		});


	function sayHello(){ return 'hello'; }

	return {
		sayHello: sayHello,
		install: install,
		setup: install
		};

};
