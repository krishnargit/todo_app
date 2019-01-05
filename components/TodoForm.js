var React = require('react');


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
  }
  handleFormSubmit(evt) {
    evt.preventDefault();
    var todo = this.inputRef.value;
    this.props.onNewTodoItem(todo);
    this.inputRef.value = '';
  }
  handleRefInputEvt(inputRef) {
    this.inputRef = inputRef;
  }
  render() {
    return (
      <form className="form-group" onSubmit={this.handleFormSubmit}>
      <div className="row">
        <input type="text" className="form-control" placeholder="Add Todo Item" ref={this.handleRefInputEvt}/><br/><br/>
        <button className="btn btn-default" type="Submit">New TODO</button>
        </div>
      </form>
    );
  }
}
module.exports = TodoForm;
