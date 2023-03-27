import React from 'react';
import { IInputProps } from 'types/interfaces';

class RadioInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <label className="form-label">
        {this.props.label}
        <div className="form-input-container">
          <div className="form-input-radio-container">
            <input type={this.props.type} id="male" name="sex" className="form-input-radio" />
            <label htmlFor="male" className="form-input-radio-label">
              Male
            </label>
          </div>
          <div className="form-input-radio-container">
            <input
              defaultChecked
              type={this.props.type}
              ref={this.props.input}
              id="female"
              name="sex"
              className="form-input-radio"
            />
            <label htmlFor="female" className="form-input-radio-label">
              Female
            </label>
          </div>
        </div>
      </label>
    );
  }
}

export default RadioInput;
