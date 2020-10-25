import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  userName = 'Vova';

  constructor() { }

  ngOnInit(): void {
    console.log('Header menu init');
  }

  addUser(userName: string): void {
    console.log('userName', userName);
  }
}
