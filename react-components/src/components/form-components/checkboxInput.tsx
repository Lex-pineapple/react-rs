import { IInputProps } from 'types/interfaces';

function CheckboxInput(props: IInputProps<boolean, HTMLInputElement>) {
  return (
    <div className="form-cell">
      <label className="form-label">
        {props.label}
        <div className="form-input-container">
          <div className="form-input-checkbox-container">
            <input
              id={props.id}
              type={props.type}
              checked={props.input}
              onChange={props.onChange}
              className={props.className}
            />
            <label htmlFor={props.id} className="form-input-checkbox-label">
              Friendly
            </label>
          </div>
        </div>
      </label>
      <div className={props.validationName}>{props.validationData}</div>
    </div>
  );
}

export default CheckboxInput;
