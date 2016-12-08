/* eslint-disable no-var, vars-on-top, prefer-spread, global-require, import/no-dynamic-require */

/*
Dynamicly load module from command line
First argument without the option is the module name
Other argumets are the parameters, that will be passed
*/
var argv = require( 'minimist' )( process.argv.slice( 2 ));
var path = require( 'path' );
var get = require( 'lodash.get' );

// Access a custom property in the object
function access( object, propPath ) {
  if ( propPath ) {
    return get( object, argv.prop );
  }
  return object;
}

module.exports = function runwith() {
  if ( argv._.length > 0 ) {
    var module = argv._[ 0 ];
    var args = argv._.slice( 1 );

    // local module, not from `node_modules`
    // path will be resolved to the root of project it is used from
    if ( path.parse( module ).name !== module ) {
      module = path.resolve( module );
    }

    // `prop` is custom path to the called function
    var callable = access( require( module ), argv.prop );

    return callable.apply( null, args );
  }
  return null;
};
