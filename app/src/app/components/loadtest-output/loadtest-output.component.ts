import { Component, OnInit } from '@angular/core';
import { LoadtestApiService } from '../../services/loadtest-api.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-loadtest-output',
  standalone: true,
  imports: [NgxJsonViewerModule],
  templateUrl: './loadtest-output.component.html',
  styleUrl: './loadtest-output.component.css'
})
export class LoadtestOutputComponent implements OnInit{

  data:any;
  parsedJson:any[]=[];

  constructor(private loadTestService:LoadtestApiService){}
  ngOnInit(): void {
    this.loadTestService.dataSubject.subscribe(e=>{
      this.parsedJson = e; 
      console.log("----------------------------------")
      console.log(this.parsedJson);
      this.data = this.isValidJson(this.parsedJson) ? this.parsedJson : {};
    console.log("+++++++++++++++++++++++++++");});
      this.loadTestService.dataSubject.next(null);
    
  }

  isValidJson(json: any): boolean {
    return json && typeof json === 'object' && !Array.isArray(json);
  }

}
