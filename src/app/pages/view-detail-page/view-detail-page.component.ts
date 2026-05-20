import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-detail-page',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './view-detail-page.component.html',
  styleUrl: './view-detail-page.component.css',
})
export class ViewDetailPageComponent {}