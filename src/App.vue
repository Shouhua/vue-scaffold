<template>
  <div class="app">
    <button
      class="btn"
      @click="toDashboard">
      Dashbord
    </button>
    <button
      class="btn"
      @click="toAbout">
      About
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    /**
     * Navigate to about module
     */
    toAbout() {
      this.$router.push({
        path: '/about'      
      }).catch((err) => {
        this.handleRouterError(err);
      });
    },
    /**
     * Navigate to dashboard module
     */
    toDashboard() {
      this.$router.push({
        path: '/dashboard'      
      }).catch((err) => {
        this.handleRouterError(err);
      });
    },
    /**
     * handle router error
     * @param {Object} err error object
     */
    handleRouterError(err) {
      if(err.name === 'NavigationDuplicated') {
      } else {
        console.log(err.message);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app {
  .btn {
    background: lightblue;
    color: black;
    border-radius: 3px;
    + .btn {
      margin-left: 10px;
    }
  }
}
</style>
