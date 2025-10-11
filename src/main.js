import './assets/bootstrap.scss';
import './assets/main.scss';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'dotenv/config';
import { createApp } from 'vue';
import { router } from '@/router/router.js';
import App from '@/App.vue';

const app = createApp(App);
app.use(router).mount('#app');
