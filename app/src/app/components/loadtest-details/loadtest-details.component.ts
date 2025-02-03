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

  test_id:any;
  data:any;
  parsedJson:any[]=[];

  constructor(private loadTestService:LoadtestApiService){}

  getTestDetails() {
    this.loadTestService.getLoadTestDetails(this.test_id).subscribe(response => {
      this.data=response;
      console.log("Test Details Response:", response);
    });
  }
}
