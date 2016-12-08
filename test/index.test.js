const execFileSync = require( 'child_process' ).execFileSync;

function runAndRead( args ) {
  const wrapperPath = './test/util/runwith.js';
  const nodeArgs = args.slice( 0 );
  nodeArgs.unshift( wrapperPath );

  const result = execFileSync( 'node', nodeArgs );
  return result.toString( 'utf8' ).trim();
}

describe( 'Unknown module', () => {
  it( 'is not found (global)', () => {
    const msg = runAndRead([ 'unknown-module', '1', '2' ]);
    expect( msg ).toMatch( /Cannot find module 'unknown-module'/ );
  });

  it( 'is not found (local)', () => {
    const msg = runAndRead([ './test/util/unknown-module', '1', '2' ]);
    expect( msg ).toMatch( /Cannot find module/ );
  });
});

describe( 'Global module', () => {
  it( 'is found', () => {
    const msg = runAndRead([ 'jest' ]);
    expect( msg ).not.toMatch( /Cannot find module/ );
  });
});

describe( 'Local module', () => {
  it( 'is found', () => {
    const msg = runAndRead([ './test/util/local-module', '1', '2' ]);
    expect( msg ).toEqual( '3' );
  });

  it( 'can access nested functions', () => {
    const msg = runAndRead([ './test/util/complex-local-module', '--prop=foo', '3' ]);
    expect( msg ).toEqual( '3' );
  });

  it( 'can access deeply nested functions', () => {
    const msg = runAndRead([ './test/util/complex-local-module', '--prop=bar.baz', '3', '4' ]);
    expect( msg ).toEqual( '12' );
  });
});
