import { Component, OnInit } from '@angular/core';
import {IItem} from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  inputValue: string;
  itemList = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    console.log('new item >>>', this.inputValue);
    this.itemList.push({
      label: this.inputValue,
      isDone: false,
      isImportant: false
    });
    this.inputValue = '';
  }

  handleDeleteItem(item: IItem): void {
    console.log('delete item >>>', item);
    const itemIndex = this.itemList.indexOf(item);
    this.itemList.splice(itemIndex, 1);
  }

  handleSetDone(item: IItem): void {
    const itemIndex = this.itemList.indexOf(item);
    const oldItem = this.itemList[itemIndex];
    const newItem = {
      ...oldItem,
      isDone: !oldItem.isDone
    };
    this.itemList = [
      ...this.itemList.slice(0, itemIndex),
      newItem,
      ...this.itemList.slice(itemIndex + 1)
    ];
  }

  handleImportantDone(item: IItem): void {
    const itemIndex = this.itemList.indexOf(item);
    const oldItem = this.itemList[itemIndex];
    const newItem = {
      ...oldItem,
      isImportant: !oldItem.isImportant
    };
    this.itemList = [
      ...this.itemList.slice(0, itemIndex),
      newItem,
      ...this.itemList.slice(itemIndex + 1)
    ];
  }
}
