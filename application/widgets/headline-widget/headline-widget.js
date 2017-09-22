/**
 * Copyright 2017 Thanik Cheowtirakul
 */
export const injections = [ 'axFeatures' ];
export function create( features ) {
   return {
      onDomAvailable( dom ) {
         [ 'headline', 'intro' ].forEach( feature => {
            const html = features[ feature ].htmlText;
            const element = dom.querySelector( `.${feature}-html-text` );
            if( html ) {
               element.innerHTML = html;
            }
            else {
               element.remove();
            }
         } );
      }
   };
}
