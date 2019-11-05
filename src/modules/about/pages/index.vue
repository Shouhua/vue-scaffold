<template>
  <div>
    <h1>About</h1>
    <div class="content">
      <h2>In the {{ name }} page</h2>
      <hello name="about"></hello>
      <greet name="about"></greet>
    </div>
  </div>
</template>
<script>
import Hello from '@/components/hello';
import Greet from '@/components/greet';

export default {
  components: {
    Hello,
    Greet
  },
  data() {
    return {
      name: 'about'
    };
  }
};
</script>
<style lang="scss" scoped>
.content {
  color: purple;
}
</style>
