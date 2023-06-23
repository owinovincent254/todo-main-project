const submit = document.getElementById("submit");
const todo = document.getElementById("todo");
const ul = document.getElementById("ul");
let todos;

function renderTodos(todoItem) {
  const li = document.createElement("li");
  const spanItem = document.createElement("span");
  const spanCircle = document.createElement("span");
  const image = document.createElement("img");
  image.src = "images/icon-cross.svg";
  image.setAttribute("class", "delete");
  li.classList.add("li");
  spanCircle.setAttribute("class", "span");
  spanItem.textContent = todoItem;
  li.appendChild(spanCircle);
  li.appendChild(spanItem);
  li.appendChild(image);
  ul.appendChild(li);
}

// A Todo Class
class Todo {
  constructor(isComplete) {
    this.isComplete = isComplete;
  }
  new(newTodo) {
    if (todo.value !== "") {
      renderTodos(newTodo);
      // store todos in local storage//

      if (localStorage.getItem("todos") === null) {
        todos = [];
        todos.push({ newTodo, isComplete: this.isComplete });
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.push({ newTodo, isComplete: this.isComplete });
        localStorage.setItem("todos", JSON.stringify(todos));
      }

      todo.value = "";
    } else {
      alert("Please Add a Todo");
    }
  }

  render() {
    if (localStorage.getItem("todos") !== null) {
      const allTodos = JSON.parse(localStorage.getItem("todos"));
      allTodos.map(function (item) {
        renderTodos(item.newTodo);
      });
    }
  }

delete(e){
  e.target.parentElement.remove();
    // Delete from Local Storage
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    const todoContent = e.target.parentElement.textContent;
    let todoElement;
    allTodos.map(function (item) {
      if (todoContent === item.newTodo) {
        todoElement = item;
        const todoIndex = allTodos.indexOf(todoElement);
        allTodos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(allTodos));
      }
    
    });
  
}





}

const myTodo = new Todo(false);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  myTodo.new(todo.value);
});

ul.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("span")) {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("delete")) {

    myTodo.delete(e)
    // e.target.parentElement.remove();
    // // Delete from Local Storage
    // const allTodos = JSON.parse(localStorage.getItem("todos"));
    // const todoContent = e.target.parentElement.textContent;
    // let todoElement;
    // allTodos.map(function (item) {
    //   if (todoContent === item.newTodo) {
    //     todoElement = item;
    //     const todoIndex = allTodos.indexOf(todoElement);
    //     allTodos.splice(todoIndex, 1);
    //     localStorage.setItem("todos", JSON.stringify(allTodos));
    //   }
    
    // });
  }
});

// load todos on startup//
document.addEventListener("DOMContentLoaded", function () {
  // if (localStorage.getItem("todos") !== null) {
  //   const allTodos = JSON.parse(localStorage.getItem("todos"));
  //   allTodos.map(function (item) {
  //     renderTodos(item.newTodo);

  //   });
  // }

  myTodo.render();
});

// function deleteTodo(){
//   alert("hello")
// }

// submit.addEventListener("click", function (e) {
//   if (todo.value !== "") {
//     e.preventDefault();
//    renderTodos(todo.value)
//     // store todos in local storage//

//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//       todos.push(todo.value);
//       localStorage.setItem("todos", JSON.stringify(todos));
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//       todos.push(todo.value);
//       localStorage.setItem("todos", JSON.stringify(todos));
//     }

//     todo.value = "";
//   } else {
//     alert("Please Add a Todo");
//   }

// ul.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("span")) {
//     e.target.classList.toggle("checked");
//   }
// });

// // load todos on startup//
// document.addEventListener("DOMContentLoaded", function () {
//     if(localStorage.getItem("todos")!==null){
//         const allTodos = JSON.parse(localStorage.getItem("todos"));
//   allTodos.map(function (item) {
//     renderTodos(item)

//   });
// }
// })

// });
