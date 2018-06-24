import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class list extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

  }

  check() {
    console.log('HAHAHAA');
  }

  makeList() {
    var listArray = this.props.list.list;
    var list = '';
    for (var i = 0; i < listArray.length; i++) {
      list += '<div className="list-item-div" onClick={this.check}><button type="button" class="btn btn-light"></button><h3 className="list-item-h3">' + listArray[i] + '</h3></div>';
    }
    return {__html: list};
  }

  render() {
    return (
      <div>
        <div className='list-container' dangerouslySetInnerHTML={this.makeList()}>

        </div>
        <div className="list-item-div" onClick={this.check}>sadasd</div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return { list: state.todo };
};

export default connect(mapStateToProps)(list);
