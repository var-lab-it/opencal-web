import { createApp } from 'vue'
import './style/app.scss'
import router from './router';
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createI18n } from 'vue-i18n'
import enGB from './translations/en_GB'
import deDE from './translations/de_DE'
import config from './plugins/config'
import { setupCalendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import App from "./App.vue";

const i18n = createI18n({
    locale: config.language,
    fallbackLocale: 'en_GB',
    messages: {
        "en_GB": enGB,
        "de_DE": deDE
    }
})
library.add(fas, fab)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)
app.use(i18n)
app.mount('#opencal')

export { i18n }
