import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { StaticReportCardComponent } from './components/static-report-card/static-report-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';

export const SHARED_IMPORTS = [
  LanguageSwitcherComponent,
  StaticReportCardComponent,
  LineChartComponent,
  PieChartComponent,
  BarChartComponent,
  TruncatePipe
];
