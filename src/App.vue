<template>
  <div class="app">
    <button class="btn" @click="toDashboard">Dashbord</button>
    <button class="btn" @click="toAbout">About</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toAbout() {
      this.$router.push({
        path: '/about'      
      }).catch(() => {})
    },
    toDashboard() {
      this.$router.push({
        path: '/dashboard'      
      }).catch(() => {})
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
