import React from 'react';
import { ITxtInputProps } from 'types/interfaces';

class TextInput extends React.Component<ITxtInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: ITxtInputProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type="text" ref={this.input} />
      </label>
    );
  }
}

export default TextInput;
