import React from 'react';
import { IDateInputProps } from 'types/interfaces';

class DateInput extends React.Component<IDateInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: IDateInputProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type="date" ref={this.input} />
      </label>
    );
  }
}

export default DateInput;
