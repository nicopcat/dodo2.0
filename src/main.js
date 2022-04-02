import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import BaseLists from './components/UI/BaseLists.vue'
import BaseSingleLi from './components/UI/BaseSingleLi.vue'
import DelButton from './components/UI/DelButton.vue'
import TransGroup from './components/UI/TransGroup.vue'

const app = createApp(App);
app.component('base-lists', BaseLists);
app.component('base-single-li', BaseSingleLi);
app.component('del-button', DelButton);
app.component('trans-group', TransGroup);


app.use(store);
app.mount('#app')
