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

  test_id:any;
  data:any;
  parsedJson:any[]=[];

  constructor(private loadTestService:LoadtestApiService){}
  getExcelData() {
    this.loadTestService.downloadTest(this.test_id).subscribe((blob: Blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'load_test_data.xlsx'; // Set the correct filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  getTestReport() {
    this.loadTestService.getLoadTestReport(this.test_id).subscribe(response => {
      this.data=response;
      console.log("Test Report Response:", response);
    });
  }
}
