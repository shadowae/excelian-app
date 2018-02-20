import React from 'react';
import cssModule from 'react-css-modules';
import styles from './NavInstance.css';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import SubPageHeader from './../SubPageHeader';
import { subHeader, navPageMenuList } from './../../utils/constant';

class NavInstance extends React.Component {
  static propTypes = {

  }
  
  render () {
    return (
      <div>
        <SubPageHeader title={subHeader.users}/>
        <Nav bsStyle="pills" stacked onSelect={handleSelect}>
          <NavItem eventKey={navPageMenuList[0].key}>
            <Glyphicon className="glyphy-icon" glyph={navPageMenuList[0].glyph} />
            {navPageMenuList[0].value}
          </NavItem>
          <NavItem eventKey={navPageMenuList[1].key}>
          <Glyphicon className="glyphy-icon" glyph={navPageMenuList[1].glyph} />
            {navPageMenuList[1].value}
          </NavItem>
          <NavItem eventKey={navPageMenuList[2].key}>
          <Glyphicon className="glyphy-icon" glyph={navPageMenuList[2].glyph} />
            {navPageMenuList[2].value}
          </NavItem>
          <NavItem eventKey={navPageMenuList[3].key}>
          <Glyphicon className="glyphy-icon" glyph={navPageMenuList[3].glyph} />
            {navPageMenuList[3].value}
          </NavItem>
          <NavItem eventKey={navPageMenuList[4].key}>
          <Glyphicon className="glyphy-icon" glyph={navPageMenuList[4].glyph} />
            {navPageMenuList[4].value}
          </NavItem>
        </Nav>
      </div>
    );
  }
}

function handleSelect(selectedKey) {
  const title = 'Go to ' + navPageMenuList[selectedKey].value + ' Page';
  alert(`${title}`);
}

export default cssModule(NavInstance, styles);

