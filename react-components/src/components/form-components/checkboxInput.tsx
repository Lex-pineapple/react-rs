import React from 'react';
import { ITxtInputProps } from 'types/interfaces';

class CheckboxInput extends React.Component<ITxtInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: ITxtInputProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type="checkbox" ref={this.input} id="friendly" />
        <label htmlFor="friendly">Friendly</label>
        <input type="checkbox" ref={this.input} id="angry" />
        <label htmlFor="angry">Angry</label>
      </label>
    );
  }
}

export default CheckboxInput;
