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

  public dataSubject2 = new BehaviorSubject<any>(null);
  public data2$ = this.dataSubject2.asObservable();

  public dataSubject3 = new BehaviorSubject<any>(null);
  public data3$ = this.dataSubject3.asObservable();

  runLoadTest(env:string,dag:string,count:number): Observable<any>{
    const params = new HttpParams().set("env",env).set("dag",dag).set("count",count.toString());
    console.log("Call Reached at service with eith", env,dag,count);
    this.httpClient.get<any>('http://127.0.0.1:8081/load',{params}).subscribe(response =>{
    console.log("response = ",response);
    this.dataSubject.next(response)});
    return this.data$;
  }

  getLoadTestDetails(test_id:string): Observable<any>{ 
    console.log("Call Reached at service with test_id", test_id);
    this.httpClient.get<any>(`http://127.0.0.1:8081/test_details/${test_id}`).subscribe(response =>{
    console.log("test_id response = ",response);
    this.dataSubject2.next(response)});
    return this.data2$;
  }

  getLoadTestReport(test_id:string): Observable<any>{ 
    console.log("Call Reached at service with test_id", test_id);
    this.httpClient.get<any>(`http://127.0.0.1:8081/report/${test_id}`).subscribe(response =>{
    console.log("test_id response = ",response);
    this.dataSubject3.next(response)});
    return this.data3$;
  }

  downloadTest(test_id:string) {
    return this.httpClient.get<any>(`http://127.0.0.1:8081/export-excel/${test_id}`,{ responseType: 'blob' as 'json' })
  }
}
