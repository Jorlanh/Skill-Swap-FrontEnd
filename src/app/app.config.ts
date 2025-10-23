import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// 1. Importe o provideHttpClient e o withInterceptors
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// 2. Importe seu novo interceptor
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // 3. Registre o HttpClient com o interceptor
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};