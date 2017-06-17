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
    this.searchUpdated = this.searchUpdated.bind(this);
    this.get_bookmarks()
  }

  onTapped() {
    this.props.action.addBookmark("Default Name", "www.example.com", ["web", "entertainment"])
  }


  get_bookmarks() {
    this.props.action.getAllBookmarks();
  }

  searchUpdated (term) {
    if(term === null || term.match(/^ *$/) !== null){
      term = 'a'
    }
    this.props.action.filterBookmark(term);
  }

  renderBookmarks() {
    return this.props.bookmark.map( (mark, idx) => {
      return (
        <div key={idx}>
          <Grid
            id={mark._id}
            name={mark.name}
            url={mark.url}
            tags={mark.tags}
            action={this.props.action}
            editable={mark.editable}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onTapped}>Add New</button>
        <SearchInput className="search-input" onChange={ this.searchUpdated } />
        <ul>
          {this.renderBookmarks()}
        </ul>
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
