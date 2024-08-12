export class Todo {
  id: number;
  text: string;
  completed: boolean;
  editing: boolean = false;

  constructor(text: string) {
    this.id = Math.random(); 
    this.text = text;
    this.completed = false;
  }
}
