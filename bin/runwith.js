#!/usr/bin/env node

process.title = 'runwith';

/* eslint-disable no-var, vars-on-top, prefer-spread, global-require, import/no-dynamic-require, wrap-iife, no-void */

var argv = require( 'minimist' )( process.argv.slice( 2 ));
var path = require( 'path' );
var fs = require( 'fs' );

void function cmd() {
  // --help
  if ( argv.help ) {
    fs.createReadStream( path.resolve( __dirname, './help.txt' )).pipe( process.stdout );
    return;
  }

  var runwith = require( '../index' );

  runwith();
}();
