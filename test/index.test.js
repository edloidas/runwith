const execFileSync = require( 'child_process' ).execFileSync;

it( 'should not find global module "unknown-module"', () => {
  const result = execFileSync( 'node', [ './test/runwith.js', 'unknown-module', '1', '2' ]);
  const msg = result.toString( 'utf8' ).trim();
  expect( msg.includes( "Cannot find module 'unknown-module'" )).toEqual( true );
});

it( 'should not find local module "unknown-module"', () => {
  const result = execFileSync( 'node', [ './test/runwith.js', './test/unknown-module', '1', '2' ]);
  const msg = result.toString( 'utf8' ).trim();
  expect( msg.includes( 'Cannot find module' )).toEqual( true );
});

it( 'should run local module "local-module"', () => {
  const result = execFileSync( 'node', [ './test/runwith.js', './test/local-module', '1', '2' ]);
  const msg = result.toString( 'utf8' ).trim();
  expect( msg ).toEqual( '3' );
});
