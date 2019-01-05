var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoItemCount: 0,
      todounCheckedCount: 0,
      todoCheckCount: 0,
      checkboxValue: false
    };
    this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
    this.handleCheckboxClickEvent = this.handleCheckboxClickEvent.bind(this);
  }
  handleNewTodoItem(todo) {
    this.setState(function(prevState) {
      var todos = prevState.todos.concat(todo);
      var todoItemCount = prevState.todoItemCount;
      var todoCheckCount = prevState.todoCheckCount;
      var todounCheckedCount = todoItemCount + 1;
      console.log('cheked '+todoCheckCount);

      return {
        todos: todos,
        todoItemCount: todoItemCount + 1,
        todounCheckedCount: todounCheckedCount
      };
    });
  }

  handleCheckboxClickEvent(evt) {
    this.setState(function(prevState) {
    var checkboxValue = prevState.checkboxValue;
    var todoItemCount = prevState.todoItemCount;
    var newCheckboxValue = !checkboxValue;
    var todoCheckCount = prevState.todoCheckCount;
    todoCheckCount = newCheckboxValue?todoCheckCount+1:todoCheckCount-1;
    var todounCheckedCount = todoItemCount - todoCheckCount;
    return {
        todounCheckedCount: todounCheckedCount,
        todoCheckCount: todoCheckCount
      };
    });

  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            ItemCount: {this.state.todoItemCount}
          </div>
          <div className="col-md-10 col-md-offset-10">
            UnChecked Count : {this.state.todounCheckedCount}
          </div>
        </div>
        <div>
          <TodoForm onNewTodoItem={this.handleNewTodoItem} />
          <TodoList todos={this.state.todos}  onCheckboxClick={this.handleCheckboxClickEvent}/>
        </div>
      </div>
    );
  }
}
module.exports = Todo;
