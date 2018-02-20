import React from 'react';
import cssModule from 'react-css-modules';
import styles from './UserPage.css';
import { Grid, Row, Col } from 'react-bootstrap'

//Sub Components
import SubPageHeader from './../SubPageHeader';
import UserTable from './../UserTable';

//Utils
import { subHeader } from './../../utils/constant';

class UserPage extends React.Component {
  static propTypes = {

  }
  render () {
    return (
      <Grid fluid> 
        <Row>
          <Col>
            <SubPageHeader title={subHeader.allUsers} icons={[ 'th', 'align-left', 'cog', 'option-vertical']} />
         </Col>
        </Row>
        <Row>
          <Col lg={12} mdOffset={1} md={10}>
            <UserTable />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default cssModule(UserPage, styles);
