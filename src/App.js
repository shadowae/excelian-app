import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'

//Sub Components
import PageHeader from './components/PageHeader/index';
import UserPage from './components/UserPage';
import NavInstance from './components/NavInstance/index';

class App extends Component {
  render() {
    return(
      <Grid className="mainrow" fluid>
        <Row className="no-gutter"> 
          <PageHeader/>
        </Row>
        <Row className="mainrow2">
          <Col lg={2} md={2}  className="row-no-border"> 
            <NavInstance/>
          </Col>
          <Col lg={10} md={10} className="row-no-border">
            <UserPage/>
          </Col>
        </Row>
      </Grid>
      
    );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
