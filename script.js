var todosList = {
  todos: [],
  addTodos:  function(todosText){
    this.todos.push(todosText);
    view.displayTodos();
  },


};


var handlers = {
  addTodos: function(todosText){
  var todosTextInput = document.getElementById('addTodosTextInput');
  todosList.addTodos(todosTextInput.value);
  todosTextInput.value = '';
  }

};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
     todosUl.innerHTML = '';
    for(var i = 0; i <todosList.todos.length; i++){

      var todosLi = document.createElement('li');


      todosLi.textContent= todosList.todos[i];
      todosUl.appendChild(todosLi);
    }

  }
}
