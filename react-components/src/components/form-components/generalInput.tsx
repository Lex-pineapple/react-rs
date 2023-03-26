import React from 'react';
import { IInputProps } from 'types/interfaces';

class GeneralInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="form-cell">
        <label className="form-label">
          {this.props.label}
          <input type={this.props.type} ref={this.props.input} className="form-input" />
        </label>
        <div className={this.props.validationName}>{this.props.validationData}</div>
      </div>
    );
  }
}

export default GeneralInput;
