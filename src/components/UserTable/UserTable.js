import React from 'react';
import cssModule from 'react-css-modules';
import styles from './UserTable.css';

import { Grid, Row, Col, Table, Image, Form, FormGroup, FormControl, Glyphicon, ControlLabel } from 'react-bootstrap'

import { userList } from './../../utils/constant';
import mainLogo from'./../../media/profile_pic.png';

class UserTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showArray: null,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
  }
  componentWillMount() {
    this.setState({
      showArray: userList,
      userList: userList
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      showArray: this.filterFunction(event.target.value)
    });
  }

  handleSubmit(event) {
    this.setState({
      showArray: this.filterFunction()
    });
  }

  filterFunction(searchValue = this.state.value) {
    if(searchValue === "") {
      return this.state.userList;
    }
    const finalArray = this.state.userList.filter(object => {
      var re = new RegExp(searchValue, 'i');
      if ((object.firstName.search(re)) >= 0) {
        return true;
      } else if ((object.lastName.search(re)) >= 0) {
        return true;
      } else if (object.userName === searchValue) {
        return true;
      } else if ((`${ object.email.local }@${ object.email.domain }`.search(re)) >= 0) {
        return true;
      } else if ((object.lastLogin.search(re)) >= 0) {
        return true;
      } else if ((object.signUpDate.search(re)) >= 0) {
        return true;
      } else return false;
    });
    console.log('this is final array', finalArray);
    return finalArray;
  }

  render () { 
    return(
      <div>
        <Grid fluid className="">
          <Row className="">
            <Col lg={12} md={12} className="userTable">
            <Table responsive hover>
              <tbody>
                <tr>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <Glyphicon className="glyphy-icon" glyph="search"/>
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                  </form>
                </tr>
              </tbody>
              <tbody>
                {
                  // IF empty array
                  this.state.showArray.length === 0 ? <tr> No User Found! </tr> :
                  // If array has object
                  this.state.showArray.map((item, index) => {
                    return (
                      <tr>
                        <td>
                          <Image src={mainLogo} circle />
                        </td>
                        <td>
                          <Grid fluid>
                            <Row>
                              <Col>
                                {item.firstName} {item.lastName}
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                {item.email.local}@{item.email.domain}
                              </Col>
                            </Row>
                          </Grid>
                        </td>
                        <td>{item.signUpDate}</td>
                        <td>{item.lastLogin}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default cssModule(UserTable, styles);
