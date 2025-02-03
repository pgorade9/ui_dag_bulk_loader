import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LoadtestApiService } from '../../services/loadtest-api.service';

@Component({
  selector: 'app-loadtest-details',
  standalone: true,
  imports: [FormsModule,NgxJsonViewerModule],
  templateUrl: './loadtest-details.component.html',
  styleUrl: '../../app.component.css'
})
export class LoadtestDetailsComponent {
getTestDetails() {
  this.loadTestService.getLoadTestDetails(this.test_id).subscribe(response => {
    console.log("Test Details Response:", response);
  });
}
  test_id:any;
  data:any;
  parsedJson:any[]=[];

  constructor(private loadTestService:LoadtestApiService){}
    ngOnInit(): void {
      this.loadTestService.dataSubject2.subscribe(e=>{
        this.parsedJson = e; 
        console.log(this.parsedJson);
        this.data = this.isValidJson(this.parsedJson) ? this.parsedJson : {};
      });
        this.loadTestService.dataSubject2.next(null);
      
    }
  
    isValidJson(json: any): boolean {
      return json && typeof json === 'object' && !Array.isArray(json);
    }
  

}
