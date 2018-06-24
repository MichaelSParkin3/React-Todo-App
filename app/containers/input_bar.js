import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';
import { bindActionCreators } from 'redux';

class input_bar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    var todo = this.state.term;

    //Add to list
    this.props.addTodo(todo);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder='type in your next todo item'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
          <button className='btn btn-danger'>Remove</button>
        </span>
      </form>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo: addTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(input_bar);
