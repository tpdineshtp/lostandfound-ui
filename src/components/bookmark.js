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
    this.renderBookmarks = this.renderBookmarks.bind(this);
    this.get_bookmarks()
  }

  onTapped() {
    this.props.action.addBookmark("Facebook", "www.fb.com", ["good", "entertainment"])
  }


  get_bookmarks() {
    this.props.action.getAllBookmarks();
  }

  searchUpdated (term) {
    console.log(term)
  }

  renderBookmarks() {
    console.log(this.props.bookmark)
    return this.props.bookmark.map( (mark, idx) => {
      console.log(idx)
      return (
        <li key={idx}> {mark.name}  {mark.url} </li>
      )
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.onTapped}>Add</button>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ul>
          {this.renderBookmarks()}
        </ul>
        <div>
          <Grid />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {bookmark: state.bookmark};
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(bookmark,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
