
module.exports = function(){

	console.log( 'install.js called' );

	var boxType = {
			title: 'Hello World'
			ngcontroller: 'helloWorld as vm',
			type: 'box box box-solid box-full-width',
			view: 'dashboard',
			html: '<h1>Hello World</h1>'
			};

	return gladys.boxType.create( boxType );

};
