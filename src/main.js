import { createApp } from 'vue'

//import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar)

const app = createApp(App);

app.mount('#app');


import "bootstrap/dist/js/bootstrap.js"