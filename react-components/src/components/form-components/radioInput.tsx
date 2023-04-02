import { IInputProps } from 'types/interfaces';

function RadioInput(props: IInputProps<string, HTMLInputElement>) {
  return (
    <label className="form-label">
      {props.label}
      <div className="form-input-container">
        <div className="form-input-radio-container">
          <input
            id="male"
            value="male"
            type={props.type}
            checked={props.input === 'male'}
            onChange={props.onChange}
            name={props.name}
            className={props.className} />
          <label htmlFor="male" className="form-input-radio-label">
            Male
          </label>
        </div>
        <div className="form-input-radio-container">
          <input
            id="female"
            value="female"
            type={props.type}
            checked={props.input === 'female'}
            onChange={props.onChange}
            name={props.name}
            className={props.className}
          />
          <label htmlFor="female" className="form-input-radio-label">
            Female
          </label>
        </div>
      </div>
    </label>
  );
}

export default RadioInput;
