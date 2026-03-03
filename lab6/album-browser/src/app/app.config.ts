import { provideHttpClient } from '@angular/common/http'; // Импорт
import { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Добавь это сюда! [cite: 50]
  ]
};
