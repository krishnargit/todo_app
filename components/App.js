var React = require('react');
var Todo = require('./Todo');

function App() {
  return (
    <div className="container text-center">
      <h1>My TODO App</h1>
      <Todo />
    </div>
  );
}

module.exports = App;
