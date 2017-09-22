<template>
  <div>
    <button type="button" class="btn pull-right" @click="login()">login</button>
  </div>
</template>

<script>
/**
 * Copyright 2017 Thanik Cheowtirakul
 */
export default {
   created() {

   },
   methods: {
    login() {
      let loginData = {id: 'user', pw: 'password'};

      const { resource } = this.features.login;
      this.eventBus.publish( `didReplace.${this.features.login.resource}`, { resource, data: loginData } );
    }
  }
};
</script>
