// data.service.spec.ts
   import { TestBed } from '@angular/core/testing';
   import { DataService } from './data.service';

   describe('DataService', () => {
     let service: DataService;
     beforeEach(() => {
       TestBed.configureTestingModule({});
       service = TestBed.inject(DataService);
     });

     it('should return data', () => {
       expect(service.getData()).toBeTruthy();
     });

     it('should return 42 synchronously', () => {
       expect(service.getDataSync()).toBe(42);
     });

     it('should return 42 asynchronously', async () => {
       const result = await service.getDataAsync().toPromise();
       expect(result).toBe(42);
     });
   });
