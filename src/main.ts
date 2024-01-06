import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import { store } from './store';

const app = createApp(App)

app.use(store);

app.use(PrimeVue);

app.mount('#app');
