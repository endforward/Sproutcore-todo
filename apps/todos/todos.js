// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

Todos = SC.Application.create();

Todos.Todo = SC.Object.extend({
  title: null,
  isDone: false
});

jQuery(document).ready(function() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
});

Todos.todoListController = SC.ArrayController.create({
  content: [],

  createTodo: function(title) {
    var todo = Todos.Todo.create({title: title});
    this.pushObject(todo);
  }
});

Todos.CreateTodoView = SC.TemplateView.create(SC.TextFieldSupport, {
  insertNewline: function() {
    var value = this.get('value');

    if(value) {
      Todos.todoListController.createTodo(value);
      this.set('value', '');
    }
  }
});

Todos.todoListView = SC.TemplateCollectionView.create({
  contentBinding: 'Todos.todoListController'
});
