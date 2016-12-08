/* eslint-disable no-console, global-require, import/no-dynamic-require */

// console output is used to test excecution result message
try {
  const msg = require( '../../index' )();
  console.log( msg );
} catch ( err ) {
  console.log( err.message );
}
