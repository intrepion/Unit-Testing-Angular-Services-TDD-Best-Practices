   // data.service.ts
   import { Injectable } from '@angular/core';
   import { Observable, of } from 'rxjs';

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
     getDataAsync(): Observable<number> {
       return of(42);
     }
   }
