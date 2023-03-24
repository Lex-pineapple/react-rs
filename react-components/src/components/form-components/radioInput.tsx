import React from 'react';
import { ITxtInputProps } from 'types/interfaces';

class RadioInput extends React.Component<ITxtInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: ITxtInputProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type="radio" ref={this.input} id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" ref={this.input} id="female" />
        <label htmlFor="female">female</label>
      </label>
    );
  }
}

export default RadioInput;
