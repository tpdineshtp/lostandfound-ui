import React, { Component } from 'react';
import Form from './form'
class Grid extends Component {
  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this);
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
      <div id="main-container">
        <div id="background-clip">
          <div id="background"></div>
        </div>
        <div hidden={editable} id="item-container">
          <span  id="view" >
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
                      {tags.map((tag,idx) => {
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
        </div>

        <Form
          {...this.props}
        />

    </div>
    );
  }
}

export default Grid;
