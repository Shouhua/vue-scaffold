<template>
  <div class="hello-container">
    Hello, {{ name }}
  </div>
</template>
<script>
export default {
  name: 'Greet',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
.hello-container {
  color: lightgreen;
}
</style>
