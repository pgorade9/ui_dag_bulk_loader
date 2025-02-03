import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadtestInputsComponent } from './components/loadtest-inputs/loadtest-inputs.component';
import { LoadtestOutputComponent } from "./components/loadtest-output/loadtest-output.component";
import { LoadtestApiService } from './services/loadtest-api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadtestInputsComponent, RouterOutlet, LoadtestOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[LoadtestApiService]
})
export class AppComponent {
  title = 'app';
}
