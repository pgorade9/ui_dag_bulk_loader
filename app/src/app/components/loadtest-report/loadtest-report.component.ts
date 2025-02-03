import { Component } from '@angular/core';
import { LoadtestApiService } from '../../services/loadtest-api.service';
import { FormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-loadtest-report',
  standalone: true,
  imports: [FormsModule,NgxJsonViewerModule],
  templateUrl: './loadtest-report.component.html',
  styleUrl: '../../app.component.css'
})
export class LoadtestReportComponent {
  getTestReport() {
    this.loadTestService.getLoadTestReport(this.test_id).subscribe(response => {
      console.log("Test Report Response:", response);
    });
  }
    test_id:any;
    data:any;
    parsedJson:any[]=[];
  
    constructor(private loadTestService:LoadtestApiService){}
      ngOnInit(): void {
        this.loadTestService.dataSubject3.subscribe(e=>{
          this.parsedJson = e; 
          console.log(this.parsedJson);
          this.data = this.isValidJson(this.parsedJson) ? this.parsedJson : {};
        });
          this.loadTestService.dataSubject3.next(null);
        
      }
    
      isValidJson(json: any): boolean {
        return json && typeof json === 'object' && !Array.isArray(json);
      }
}
