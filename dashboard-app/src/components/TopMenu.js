import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import icononly from './icononly.png';

export default function TopMenu() {
  return (
<Menu fixed='top' inverted>
<Container>
  <Menu.Item header>
    <Image size='mini' src={icononly} style={{ marginRight: '1.5em' }} />
    Verified Watcher
  </Menu.Item>
  <Menu.Item as='a' href='https://www.okimsrazor.com/verification/'>What?</Menu.Item>

  <Dropdown item simple text='Source Code'>
    <Dropdown.Menu>
      <Dropdown.Item as='a' href='https://github.com/kimdhamilton/verifiend'>Backend</Dropdown.Item>
      <Dropdown.Item as='a' href='https://github.com/kimdhamilton/verifiend-site'>Frontend (this)</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Menu.Item as='a' href='mailto:contact@verifiend.xyz'>Contact</Menu.Item>
</Container>
</Menu>
  );
}

