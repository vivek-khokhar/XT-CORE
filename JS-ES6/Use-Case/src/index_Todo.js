// Model
class Todo {
  constructor(title, date) {
    Todo.nextId++;
    this.id = Todo.nextId; // auto_increment
    this.title = title;
    this.completed = false;
    this.date = date;
  }
}
Todo.nextId = 0;
// Service
class TodosService {
  constructor() {
      this.todoList = [];
  }

  // adding new instance of model todo class to array list.
  addTodo(title) {
      this.todoList.push(new Todo(title, (new Date()).toDateString()));
      return this.todoList[this.todoList.length - 1].id;
  }

  // edit todo based on id
  editTodo(id, newTitle) {
      this.todoList.forEach(element => {
          if(id === element.id) {
              element.title = newTitle;
          }
      });
      return this.todoList;
  }

  // mark todo as completed
  completeTodo(id) {
    this.todoList.forEach(element => {
        if(id === element.id) {
            element.completed = true;
        }
    });
    return this.todoList;
  }

  // complete all todos
  completeAll() {
    this.todoList.forEach(element => {
            element.completed = true;
    });
    return this.todoList;
  }

  // delete todo based on id
  deleteTodo(id) {
    let deleteIndex;
    this.todoList.forEach((element, index) => {
        if(id === element.id) {
            deleteIndex = index;
        }
    });
    this.todoList.splice(deleteIndex, 1);
    return this.todoList;
  }

  // delete all completed
  clearCompleted() {
      let deleteIndexs = [];
    this.todoList.forEach((element, index) => {
        if(element.completed) {
            deleteIndexs.push(index);
        }
    });
    deleteIndexs.forEach(element => this.deleteTodo(element));
    return this.todoList;
  }

  // view all based on completed status provided in params
  viewTodos(filter) {
      return this.todoList.filter(element => {
          return element.completed === filter;
      });
  }
}

const service = new TodosService();

console.log(service.addTodo('Test 1'));
//1
console.log(service.addTodo('Test 2'));
//2
console.log(service.addTodo('Test 3'));
//3
console.log(service.addTodo('Test 4'));
//4
console.log(service.viewTodos(false))
// (4) [Todo, Todo, Todo, Todo]
// 0: Todo {id: 1, title: "Test 1", completed: false, date: "Wed Nov 28 2018"}
// 1: Todo {id: 2, title: "Test 2", completed: false, date: "Wed Nov 28 2018"}
// 2: Todo {id: 3, title: "Test 3", completed: false, date: "Wed Nov 28 2018"}
// 3: Todo {id: 4, title: "Test 4", completed: false, date: "Wed Nov 28 2018"}
// length: 4
// __proto__: Array(0)
console.log(service.editTodo(2, 'edited todo'));
// (4) [Todo, Todo, Todo, Todo]
// 0: Todo {id: 2, title: "edited todo", completed: true, date: "Wed Nov 28 2018"}
// 1: Todo {id: 3, title: "Test 3", completed: true, date: "Wed Nov 28 2018"}
// 2: Todo {id: 4, title: "Test 4", completed: true, date: "Wed Nov 28 2018"}
// length: 3
// __proto__: Array(0)
console.log(service.completeTodo(4));
// (4) [Todo, Todo, Todo, Todo]
// 0: Todo {id: 2, title: "edited todo", completed: true, date: "Wed Nov 28 2018"}
// 1: Todo {id: 3, title: "Test 3", completed: true, date: "Wed Nov 28 2018"}
// 2: Todo {id: 4, title: "Test 4", completed: true, date: "Wed Nov 28 2018"}
// length: 3
// __proto__: Array(0)
console.log(service.deleteTodo(1))
// (3) [Todo, Todo, Todo]
// service.viewTodos(false)
// (2) [Todo, Todo]
// 0: Todo {id: 2, title: "edited todo", completed: false, date: "Wed Nov 28 2018"}
// 1: Todo {id: 3, title: "Test 3", completed: false, date: "Wed Nov 28 2018"}
// length: 2
// __proto__: Array(0)
console.log(service.viewTodos(true))
// [Todo]
// 0: Todo {id: 4, title: "Test 4", completed: true, date: "Wed Nov 28 2018"}
// length: 1
// __proto__: Array(0)
console.log(service.completeAll())
// (3) [Todo, Todo, Todo]
// 0: Todo {id: 2, title: "edited todo", completed: true, date: "Wed Nov 28 2018"}
// 1: Todo {id: 3, title: "Test 3", completed: true, date: "Wed Nov 28 2018"}
// 2: Todo {id: 4, title: "Test 4", completed: true, date: "Wed Nov 28 2018"}
// length: 3
// __proto__: Array(0)
console.log(service.viewTodos(false))
//[]
console.log(service.viewTodos(true))
// (3) [Todo, Todo, Todo]
// 0: Todo {id: 2, title: "edited todo", completed: true, date: "Wed Nov 28 2018"}
// 1: Todo {id: 3, title: "Test 3", completed: true, date: "Wed Nov 28 2018"}
// 2: Todo {id: 4, title: "Test 4", completed: true, date: "Wed Nov 28 2018"}
// length: 3
// __proto__: Array(0)
