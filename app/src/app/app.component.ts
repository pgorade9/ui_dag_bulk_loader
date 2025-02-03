import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadtestInputsComponent } from './components/loadtest-inputs/loadtest-inputs.component';
import { LoadtestApiService } from './services/loadtest-api.service';
import { LoadtestDetailsComponent } from "./components/loadtest-details/loadtest-details.component";
import { LoadtestReportComponent } from "./components/loadtest-report/loadtest-report.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadtestInputsComponent, LoadtestDetailsComponent, LoadtestReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[LoadtestApiService]
})
export class AppComponent {
  title = 'app';
}
