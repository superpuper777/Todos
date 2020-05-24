export class Todo {
  id: number;
  title: string = '';
  complete: boolean;

  constructor(title: string) {
    this.title = title;
    // this.id = Math.floor(Math.random() * 100);
  }
}
