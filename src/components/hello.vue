<template>
  <div class="hello-container">
    Hello, {{ name }}
  </div>
</template>
<script>
export default {
  name: 'Hello',
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
  color: lightcoral;
}
</style>
