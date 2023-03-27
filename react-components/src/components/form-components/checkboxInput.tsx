import React from 'react';
import { IInputProps } from 'types/interfaces';

class CheckboxInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="form-cell">
        <label className="form-label">
          {this.props.label}
          <div className="form-input-container">
            <div className="form-input-checkbox-container">
              <input
                type={this.props.type}
                ref={this.props.input}
                id="friendly"
                className="form-input-checkbox"
              />
              <label htmlFor="friendly" className="form-input-checkbox-label">
                Friendly
              </label>
            </div>
          </div>
        </label>
        <div className={this.props.validationName}>{this.props.validationData}</div>
      </div>
    );
  }
}

export default CheckboxInput;
