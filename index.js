/* eslint-disable no-var, vars-on-top, prefer-spread, global-require, import/no-dynamic-require */

/*
Dynamicly load module from command line
First argument without the option is the module name
Other argumets are the parameters, that will be passed
*/
var argv = require( 'minimist' )( process.argv.slice( 2 ));

module.exports = function runwith() {
  if ( argv._.length > 0 ) {
    var module = argv._[ 0 ];
    var args = argv._.slice( 1 );
    return require( module ).apply( null, args );
  }
  return null;
};
