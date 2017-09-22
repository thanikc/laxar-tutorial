/**
 * Copyright 2017 Thanik Cheowtirakul
 */
import { create } from 'laxar';
import artifacts from 'laxar-loader/artifacts?flow=main&theme=cube';
import * as vueAdapter from 'laxar-vue-adapter';

const config = {
   name: 'shop-demo',
   router: {
      query: {
         enabled: true
      },
      navigo: {
         useHash: true
      }
   },
   logging: {
      threshold: 'TRACE'
   },
   theme: 'cube'
};

create( [ vueAdapter ], artifacts, config )
// Uncomment to use the LaxarJS developer tools (https://chrome.google.com/webstore/search/LaxarJS):
   .tooling( require( 'laxar-loader/debug-info?flow=main&theme=cube' ) )
   .flow( 'main', document.querySelector( '[data-ax-page]' ) )
   .bootstrap();
