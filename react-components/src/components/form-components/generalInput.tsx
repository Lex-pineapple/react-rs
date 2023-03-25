import React from 'react';
import { IInputProps } from 'types/interfaces';

class GeneralInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type={this.props.type} ref={this.props.input} />
      </label>
    );
  }
}

export default GeneralInput;
