import { Component } from 'react';
import { Menu, MenuContainer } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevstate => ({
      visible: !prevstate.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  render() {
    return (
      <MenuContainer>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && <Menu>Menu</Menu>}
      </MenuContainer>
    );
  }
}
