var React = require('react');

var TodoList = function(props) {
  var todoList = [];
  var todos = props.todos;
  for (var i = 0; i < todos.length; ++i) {
    var txtlength = todos[i].length;
    if (txtlength > 0)
    todoList.push(
      <li className="list-group-item">
        <input type="checkbox" onChange={props.onCheckboxClick} />
        {todos[i]}
      </li>
    );
  }

return (
  <ul className="list-group">
    {todoList}
  </ul>

);
}

module.exports = TodoList;
