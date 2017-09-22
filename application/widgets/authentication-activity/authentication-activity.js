/**
 * Copyright 2017 Thanik Cheowtirakul
 */
export const injections = [ 'axEventBus', 'axFeatures' ];
export function create( eventBus, features ) {
  eventBus.subscribe( `didReplace.${features.login.resource}`, (event) => {
    let loginData = event.data;
    login(loginData, (authData) => {
      alert('login: ' + JSON.stringify(authData));
      const { resource } = features.authentication;
      eventBus.publish( `didReplace.${resource}`, { resource, data: authData } );
    });
  });
}

function login(data, callback) {
  // Call authentication service

  return callback({
    token: 'exampleToken',
    expires: Date.now() + 1000*60*60*3
  });
}