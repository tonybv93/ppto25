import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PptoTableComponent } from './ppto-table/ppto-table.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { PptoFormComponent } from './ppto-form/ppto-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PptoTableComponent,HeaderComponent, SummaryComponent, PptoFormComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mippto25';
  openForm = false;
}
