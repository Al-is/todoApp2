export class Model {
  user;
  items:any ;
  constructor() {
    this.user = 'Ali Can';
    this.items = [
      new TodoItems('Spor', false),
      new TodoItems('Kahvaltı', true),
      new TodoItems('Sinema', false),
      new TodoItems('Kitap okuma', true),
    ];
  }
}
export class TodoItems {
  description;
  action;
  constructor(description:string, action:any) {
    this.description = description;
    this.action = action;
  }
}
