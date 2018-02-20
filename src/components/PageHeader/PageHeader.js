import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PageHeader.css';
import { Button, Glyphicon } from 'react-bootstrap';

class PageHeader extends React.Component {
  static propTypes = {

  }
  render () {
    return (
      <div className="header-container">
        <Button bsClass="hamburger-button">
          <Glyphicon glyph="align-justify" />
        </Button>
        <span> 
          Product Name
        </span>
      </div>
    );
  }
}

export default cssModule(PageHeader, styles);
