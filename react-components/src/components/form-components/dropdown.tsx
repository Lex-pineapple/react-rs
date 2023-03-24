import React from 'react';
import { ITxtInputProps } from 'types/interfaces';

class DropDownInput extends React.Component<ITxtInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: ITxtInputProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label htmlFor="breeds">
        {this.props.label}
        <select id="breeds">
          <option value="cornish-rex">Cornish Rex</option>
          <option value="Other">Other</option>
        </select>
      </label>
    );
  }
}

export default DropDownInput;
