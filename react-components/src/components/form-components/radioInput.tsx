import React from 'react';
import { IInputProps } from 'types/interfaces';

class RadioInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type={this.props.type} id="male" name="sex" />
        <label htmlFor="male">Male</label>
        <input type={this.props.type} ref={this.props.input} id="female" name="sex" />
        <label htmlFor="female">Female</label>
      </label>
    );
  }
}

export default RadioInput;
