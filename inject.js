#!/usr/bin/env node


var path = require('path');

var filename = process.env.INJECT_FILE || ( process.argv.length > 2 ? process.argv[2] : process.argv[1] );
filename = path.resolve(filename);


if ( filename === path.resolve(__filename) ){
	console.log('missing input file argument');
	process.exit(1);
}

var data = require( filename );



function replace_data( data ){
	Object.keys(data).forEach(function(key){
		value = data[key];
		if ( typeof(value) === 'object' ) {
			replace_data(value);
		}else{
			if ( process.env.hasOwnProperty(value)){
				data[key] = process.env[value];
			}
		}
	});
	return data;
}

require('fs').writeFile( filename , JSON.stringify(replace_data(data), {} , 4 ) );
