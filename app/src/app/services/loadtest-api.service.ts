import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadtestApiService {

  constructor(private httpClient:HttpClient) { }

  runLoadTest(env:string,dag:string,count:number): Observable<any>{
    const params = new HttpParams().set("env",env).set("dag",dag).set("count",count.toString());
    console.log("Call Reached at service with values", env,dag,count);
    return this.httpClient.get<any>('http://127.0.0.1:8081/load',{params});
  }

  getLoadTestDetails(test_id:string): Observable<any>{ 
    console.log("Call Reached at service with test_id", test_id);
    return this.httpClient.get<any>(`http://127.0.0.1:8081/test_details/${test_id}`);
  }

  getLoadTestReport(test_id:string): Observable<any>{ 
    console.log("Call Reached at service with test_id", test_id);
    return this.httpClient.get<any>(`http://127.0.0.1:8081/report/${test_id}`);
  }

  downloadTest(test_id:string) {
    return this.httpClient.get<any>(`http://127.0.0.1:8081/export-excel/${test_id}`,{ responseType: 'blob' as 'json' })
  }
}
