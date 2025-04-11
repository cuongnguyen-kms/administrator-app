import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  collapsed = false;

  navItems = [
    { route: '/', label: 'SIDEBAR.HOME', icon: 'fas fa-home' },
    { route: '/dashboard', label: 'SIDEBAR.DASHBOARD', icon: 'fas fa-chart-line' }
    // Add more items here
  ];

  @Output() collapseChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.collapseChange.emit(this.collapsed);
    localStorage.setItem('sidebarCollapsed', this.collapsed.toString());
  }

  ngOnInit(): void {
    let saved = 'false';
    try {
      if (typeof window !== 'undefined') {
        saved = localStorage.getItem('sidebarCollapsed') || 'false';
      }
    } catch (e) {
      saved = 'false';
    }
    this.collapsed = saved === 'true';
    this.collapseChange.emit(this.collapsed);
  }

}
