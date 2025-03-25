import { Injectable, NgModule } from '@angular/core';
import { rejects } from 'node:assert';
import { promises } from 'node:dns';
import { resolve } from 'node:path';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class CommonService {

  jsonData:any;

  constructor( private http:HttpClient) { }

  getData():Promise<string>{
  
    return new Promise((resolve,rejects)=>{
      this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe({
        next:(response)=>{
          console.log("res->>>>>",response);
        },
        error:(error)=>{
          rejects(error)
        }
      })
    });
  }

  getEmployeeData():Promise<string>{
    return new Promise((resolve,rejects)=>{
      this.http.get('https://dummy.restapiexample.com/api/v1/employee/2').subscribe({
        next:(response)=>{
          console.log("1111111",response);
        },
        error:(error)=>{
          console.log("1111111",error)
        }
      });
    })
  }
}
