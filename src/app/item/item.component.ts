import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface IItem {
  label: string;
  isDone: boolean;
  isImportant: boolean;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: IItem;
  @Output() deleteItem = new EventEmitter();
  @Output() setDoneItem = new EventEmitter();
  @Output() setImportantItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
