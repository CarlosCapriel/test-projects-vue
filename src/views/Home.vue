<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <Button description="Botón">
      </Button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/buttons/Button.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button,
  },
};
</script>
