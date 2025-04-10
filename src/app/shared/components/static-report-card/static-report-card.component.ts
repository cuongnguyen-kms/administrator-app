import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-static-report-card',
  imports: [],
  templateUrl: './static-report-card.component.html',
  styleUrl: './static-report-card.component.scss'
})
export class StaticReportCardComponent {
  @Input() header: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() value: number | string = '';
}
