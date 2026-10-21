import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNgxMask(),
    provideHttpClient(),
    importProvidersFrom(NgbModule),
  ],
};
