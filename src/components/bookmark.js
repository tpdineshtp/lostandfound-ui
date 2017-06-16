import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmark from '../actions/bookmark';
import SearchInput from 'react-search-input'
import Grid from './grid';

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.onTapped = this.onTapped.bind(this);
    this.get_bookmarks = this.get_bookmarks.bind(this);
    this.get_bookmarks()
  }

  onTapped() {
    console.log(this.props.action)
    this.props.action.addRequest("Facebook", "www.fb.com", ["good, entertainment"])
  }


  get_bookmarks() {
    this.props.action.getRequest();
  }
  searchUpdated (term) {
    console.log(term)
  }
  render() {
    return (
      <div>
        <button onClick={this.onTapped}>Add</button>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <div>
          {console.log(this.props.bookmark)}
          <Grid />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state,props){
  return {props: state.bookmark};
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(bookmark,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
