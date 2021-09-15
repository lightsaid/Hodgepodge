/* https://github.com/FortAwesome/vue-fontawesome */

import { app } from '@/main'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronRight,
  faTimes,
  faBars,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronRight, faTimes, faBars, faSpinner)

app.component('fa-icon', FontAwesomeIcon)
