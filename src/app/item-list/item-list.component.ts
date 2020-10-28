import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IItem, ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemListLabel: TemplateRef<any>;

  inputValue: string;
  itemList = [{
    label: 'Drink tea',
    isDone: false,
    isImportant: false,
    createAt: new Date(),
    progress: 0.5,
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    console.log('new item >>>', this.inputValue);
    this.itemList.push({
      label: this.inputValue,
      isDone: false,
      isImportant: false,
      createAt: new Date(),
      progress: 0.55
    });
    this.inputValue = '';
  }

  handleDeleteItem(item: IItem): void {
    console.log('delete item >>>', item);
    const itemIndex = this.itemList.indexOf(item);
    this.itemList.splice(itemIndex, 1);
  }

  handleSetDone(item: IItem): void {
    console.log('Set DONE item >>>', item);
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

  handleSetImportant(item: IItem): void {
    console.log('Set IMPORTANT item >>>', item);

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
