   // data.service.ts
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     getData(): string {
       return 'Hello, World!';
     }
     getDataSync(): number {
       return 42;
     }
   }
