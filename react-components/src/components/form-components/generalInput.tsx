import React from 'react';
import { IInputProps } from 'types/interfaces';

class GeneralInput extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="form-cell">
        <label className="form-label" htmlFor={this.props.labelFor}>
          {this.props.label}
          <input
            type={this.props.type}
            ref={this.props.input}
            className="form-input"
            id={this.props.labelFor}
          />
        </label>
        <div className={this.props.validationName}>{this.props.validationData}</div>
      </div>
    );
  }
}

export default GeneralInput;
