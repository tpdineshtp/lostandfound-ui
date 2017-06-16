import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmark from '../actions/add_bookmark';
import SearchInput, {createFilter} from 'react-search-input'
import { ListView, ListViewItem } from 'react-scrollable-list-view';

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.onTapped = this.onTapped.bind(this);
  }

  onTapped() {
    console.log(this.props.action)
    this.props.action.addRequest("Facebook", "www.fb.com", ["good, entertainment"])
  }

  searchUpdated (term) {
    console.log(term)
  }
  render() {
    return (

      <div className="App">
        <button onClick={this.onTapped}>Add</button>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state,props){
  return {props: state.bookmark}
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(bookmark,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
