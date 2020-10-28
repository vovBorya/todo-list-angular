import {Component, ViewChild} from '@angular/core';
import {HeaderMenuComponent} from './header-menu/header-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('headerRef', {static: false}) headerRef: HeaderMenuComponent;
  title = 'first-project';
}
