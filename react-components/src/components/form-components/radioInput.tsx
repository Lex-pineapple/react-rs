import { IRadioInputProps } from 'types/interfaces';

function RadioInput({ register, name, label }: IRadioInputProps) {
  return (
    <label className="form-label">
      {label}
      <div className="form-input-container">
        <div className="form-input-radio-container">
          <input
            id="male"
            value="male"
            type="radio"
            {...register(name)}
            // checked={props.input === 'male'}
            // onChange={props.onChange}
            // name={props.name}
            className="form-input-radio"
          />
          <label htmlFor="male" className="form-input-radio-label">
            Male
          </label>
        </div>
        <div className="form-input-radio-container">
          <input
            id="female"
            value="female"
            type="radio"
            {...register(name)}
            // checked={props.input === 'female'}
            // onChange={props.onChange}
            // name={props.name}
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

export default RadioInput;
