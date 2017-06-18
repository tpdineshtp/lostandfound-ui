import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmark from '../actions/bookmark';
import * as user from '../actions/user'
import SearchInput from 'react-search-input'
import Grid from './grid';
import Form from './form'
import UserForm from './userform'
import { ListView, ListViewItem } from 'react-scrollable-list-view';

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.onNewTapped = this.onNewTapped.bind(this);
    this.renderBookmarks = this.renderBookmarks.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.logOut = this.logOut.bind(this)
  }

  onNewTapped() {
    this.props.useraction.addNewBookmark();
  }
  logOut(){
    this.props.useraction.logOut();
  }
  searchUpdated (term) {
    if(term === null || term.match(/^ *$/) !== null){
      term = '*'
    }
    this.props.action.filterBookmark(term, this.props.user._id);
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
        <div hidden={this.props.user._id}>
          Login :
          <UserForm
            {...this.props}
            register={false}
          />

          Register :
          <UserForm
            {...this.props}
            register={true}
          />
        </div>
        <div hidden={!this.props.user._id}>
          <SearchInput className="search-input" onChange={ this.searchUpdated } />
          <button onClick={this.onNewTapped}>Add New</button>
          <button onClick={this.logOut}> Logout </button>
          <ul>
            <div hidden={!this.props.user.new_bookmark} >
              <Form
                {...this.props}
                editable={true}
                newbookmark={true}
                id="new"
               />
              </div>
            {this.renderBookmarks()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {bookmark: state.bookmark, user: state.user};
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(bookmark,dispatch),
    useraction: bindActionCreators(user, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
