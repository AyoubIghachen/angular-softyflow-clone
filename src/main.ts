import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Import the CSS files
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
//
import axios from 'axios';


axios.defaults.withCredentials = true;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
