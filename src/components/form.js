import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.updateBookmark = this.updateBookmark.bind(this)
    this.flip = this.flip.bind(this)
  }
  updateBookmark( bookmark ) {
    var name = document.getElementById(bookmark+'name').value
    var url = document.getElementById(bookmark+'url').value
    var tags = document.getElementById(bookmark+'tags').value
    var request = this.request_body(name,url,tags);
    if(this.props.newbookmark === true) {
      console.log(name)
      request.userId = this.props.user._id;
      this.props.action.addBookmark(request, this.props.user._id)
      this.props.useraction.removeNewBookmark();
    }
    else {
      this.props.action.updateBookmark( request, bookmark )
    }
  }

  request_body(name, url,tags) {
    return {
      name: name,
      url: url,
      tags: tags.replace( /\n/g, " " ).split(/[ ,]+/).filter(Boolean)
    }
  }
  flip(bookmark){
    if(this.props.newbookmark === true) {
      this.props.useraction.removeNewBookmark();
    }
    else{
      this.props.action.makeEditable(bookmark)
    }
  }

  render() {
    var { id, name, tags, url, editable } = this.props
    return (
      <div hidden={!editable} id="edit" >
        <table cellSpacing="1" >
          <tbody>
          <tr>
            <td >
              Name:
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <input id={id+"name"} name="title"  type="text" defaultValue={name} size="50"  />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td >
              URL:
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <input id={id+"url"} name="labels" type="text" defaultValue={url} size="50"  />
            </td>
          </tr>
          <tr>
            <td>
              <br/>
            </td>
          </tr>
          <tr>
            <td >
              Tags:
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <textarea id={id+"tags"} rows="4" defaultValue={tags}>
              </textarea>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input type="button" value="Cancel" onClick={ () => this.flip(id)} />
                      &nbsp;&nbsp;&nbsp;
                      <input className="submit" type="submit" value="Save" onClick={ () => this.updateBookmark(id)}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default Form;
