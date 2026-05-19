import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';

@Component({
  selector: 'app-about-us-page',
  imports: [
    RouterLink,
    NavbarThemeDirective
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css',
})
export class AboutUsPageComponent {}
