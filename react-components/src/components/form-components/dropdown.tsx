import React from 'react';
import { ISelectProps } from 'types/interfaces';

class DropDownInput extends React.Component<ISelectProps> {
  constructor(props: ISelectProps) {
    super(props);
  }

  render() {
    return (
      <label htmlFor="breeds" className="form-label">
        {this.props.label}
        <select id="breeds" ref={this.props.input} className="form-input">
          <option value="Cornish-rex">Cornish Rex</option>
          <option value="Munchkin">Munchkin</option>
          <option value="Other">Other</option>
        </select>
      </label>
    );
  }
}

export default DropDownInput;
