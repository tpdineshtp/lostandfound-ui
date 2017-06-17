import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this);
  }

  updateBookmark( bookmark ) {
    var name = document.getElementById(bookmark+'name').value
    var url = document.getElementById(bookmark+'url').value
    var tags = document.getElementById(bookmark+'tags').value
    this.props.action.updateBookmark(
      {
        _id: bookmark,
        name: name,
        url: url,
        tags: tags.replace( /\n/g, " " ).split(/[ ,]+/).filter(Boolean)
      }
    )
  }

  deleteBookmark( bookmark ) {
    this.props.action.deleteBookmark(bookmark);
  }

  flip(bookmark){
    this.props.action.makeEditable(bookmark)
  }

  render() {

    var { id, name, tags, url, editable } = this.props;
    return (
      <div>
          <span hidden={editable} id="view" >
            <table width="100%">
              <tbody>
                <tr>
                  <td>
                    <span>
                      <a onClick={() => this.flip(id)}></a>
                    </span>
                  </td>
                  <td width="100%" >
                    <span >
                      <a>{name}</a>
                    </span>
                    <span>
                    </span>
                    <span >
                      &nbsp;-&nbsp;
                    </span>
                    <span >
                      {url}
                    </span>
                    <span >
                      &nbsp;-&nbsp;
                    </span>
                    <span >
                      {this.props.tags.map((tag,idx) => {
                        return (<span key={idx}><a href="javascript:void(0);" >{tag} </a></span>);
                      })}
                    </span>
                    <span>
                      &nbsp;-&nbsp;
                      <a href="javascript:void(0);" onClick={() => this.flip(id)}>
                        Edit
                      </a>
                      &nbsp;&nbsp;
                      <a href="javascript:void(0);" onClick={() => this.deleteBookmark(id)}>Remove</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </span>





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
                  <input id={id+"url"} name="labels" type="text" defaultValue={url}  />
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
    </div>
    );
  }
}

export default Grid;
