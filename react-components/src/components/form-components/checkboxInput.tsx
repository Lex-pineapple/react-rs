import React from 'react';
import { IInputProps } from 'types/interfaces';

class CheckboxInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type={this.props.type} ref={this.props.input} id="friendly" />
        <label htmlFor="friendly">Friendly</label>
      </label>
    );
  }
}

export default CheckboxInput;
