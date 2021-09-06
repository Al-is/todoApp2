import { Component } from '@angular/core';
import { Model, TodoItems } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  isDisplay = false;
  GetName() {
    return this.model.user;
  }
  GetItems() {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter((i: { action: any }) => !i.action);
  }
  addItem(value: string) {
    if (value != '') {
      this.model.items.push(new TodoItems(value, false));
    }
  }
}
