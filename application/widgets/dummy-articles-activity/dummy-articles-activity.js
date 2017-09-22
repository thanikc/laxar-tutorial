/**
 * Copyright 2017 Thanik Cheowtirakul
 */
import { articles } from './articles';

export const injections = [ 'axEventBus', 'axFeatures' ];
export function create( eventBus, features ) {
   eventBus.subscribe( 'beginLifecycleRequest', () => {
      const { resource } = features.articles;
      eventBus.publish( `didReplace.${resource}`, { resource, data: articles } );
   } );
}
