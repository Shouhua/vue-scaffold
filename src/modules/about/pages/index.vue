<template>
  <div>
    <h1>About</h1>
    <div class="content">In the {{ name }} page</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "about"
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  color: purple;
}
</style>
