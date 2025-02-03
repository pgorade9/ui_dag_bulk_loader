import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root'
})
export class LoadtestApiService {

  constructor(private httpClient:HttpClient) { }

  public dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  runLoadTest(env:string,dag:string,count:number): Observable<any>{
    const params = new HttpParams().set("env",env).set("dag",dag).set("count",count.toString());
    console.log("Call Reached at service with eith", env,dag,count);
    this.httpClient.get<any>('http://127.0.0.1:8081/load',{params}).subscribe(response =>{
    console.log("response = ",response);
    this.dataSubject.next(response)});
    return this.data$;
  }
}
