import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadtestApiService } from '../../services/loadtest-api.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-loadtest-inputs',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule, NgxJsonViewerModule],
  templateUrl: './loadtest-inputs.component.html',
  styleUrl: '../../app.component.css'
})
export class LoadtestInputsComponent {

  data: any = { key: 'value' };
  isLoading = false;
  
  constructor(private loadTestService:LoadtestApiService){}
  runLoadTestAPI() {
    this.isLoading = true;
    this.loadTestService.runLoadTest(this.env, this.dag, this.count).subscribe(response=>{
      this.data=response;
      
      if (this.data !== null && this.data !== undefined) {
        this.isLoading = false;
      }
    });
  }
  env: string='evt-ltops';
  dag: string='csv_parser_wf_status_gsm';
  count: number=1;
}
