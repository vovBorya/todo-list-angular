import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users = [
    {lastName: 'Borisov', firstName: 'Vova', gender: 'male', email: 'vov@gmail.com'},
    {lastName: 'Pupkin', firstName: 'Vasya', gender: 'male', email: 'vasya@mail.ru'},
    {lastName: 'Ivanov', firstName: 'Ivan', gender: 'male', email: 'ivan@net.com'}
  ];
  columns = [{ name: 'Last name' }, { name: 'First name' }, { name: 'Email' }, { name: 'Gender' }];

  constructor() { }

  ngOnInit(): void {
  }

}
