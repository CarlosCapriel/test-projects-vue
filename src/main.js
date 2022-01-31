import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const app = createApp(App);

app.directive('theme', {
  mounted(el, binding) {
    if (binding.value === 'primary') {
      el.setAttribute('style', 'color: red');
    } else if (binding.value === 'secondary') {
      el.setAttribute('style', 'color:green');
    } else if (binding.value === 'tertiary') {
      el.setAttribute('style', 'color: blue');
    } else {
      el.setAttribute('style', 'color: black');
    }
  },
});

app.use(router).mount('#app');
