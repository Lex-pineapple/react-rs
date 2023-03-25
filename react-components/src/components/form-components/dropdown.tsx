import React from 'react';
import { ISelectProps } from 'types/interfaces';

class DropDownInput extends React.Component<ISelectProps> {
  constructor(props: ISelectProps) {
    super(props);
  }

  render() {
    return (
      <label htmlFor="breeds">
        {this.props.label}
        <select id="breeds" ref={this.props.input}>
          <option value="cornish-rex">Cornish Rex</option>
          <option value="Other">Other</option>
        </select>
      </label>
    );
  }
}

export default DropDownInput;
