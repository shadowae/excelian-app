import React from 'react';
import cssModule from 'react-css-modules';
import styles from './SubPageHeader.css';
import {Grid, Col, Row, Button, Glyphicon} from 'react-bootstrap';

class SubPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.checkIfGotIcons = this.checkIfGotIcons.bind(this);
    this.renderSingle = this.renderSingle.bind(this);
    this.renderIcons = this.renderIcons.bind(this);
  }
  checkIfGotIcons = () => {
    if (this.props.icons !== undefined) {
      return true;
    }
    return false;
  }

  renderSingle = () => {
    return (
      <div className="subpageheader">
        {this.props.title}
      </div>
    )
  }
  renderIcons = () => {
    
  }

  
  renderWithIcons = () => {
    return (
      <div className="subpageheader">
        <div>
        </div>
        <div>
          <Grid fluid> 
            <Row>
              <Col lg={2} md={2}>
                {this.props.title}
              </Col>
              <Col Col lg={2} lgOffset={8} md={3} mdOffset={7}>
              {
                this.props.icons.map((item, index) => {
                  return (
                      <Button className="icon-button">
                        <Glyphicon glyph={item} />
                      </Button>
                  )
                })
              }
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
  static propTypes = {

  }
  render () {
    return (
      <div>
        {this.checkIfGotIcons() ? this.renderWithIcons() : this.renderSingle()}
      </div>
    );
    
  }
}

export default cssModule(SubPageHeader, styles);
