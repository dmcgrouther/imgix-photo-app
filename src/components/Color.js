import React from 'react';
import { SketchPicker } from 'react-color';
// https://casesandberg.github.io/react-color/

class Color extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    console.log(this.state.background)
    this.props.onChange(color.hex);
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default Color;
