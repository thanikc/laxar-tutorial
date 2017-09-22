/**
 * Copyright 2017 Thanik Cheowtirakul
 */
import * as axMocks from 'laxar-mocks';

describe( 'The login-widget', () => {

   beforeEach( axMocks.setupForWidget() );

   beforeEach( () => {
      axMocks.widget.configure( {} );
   } );

   beforeEach( axMocks.widget.load );

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'still needs some tests', () => {
      // ... first test here
   } );


} );
