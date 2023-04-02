import { IRadioInputProps } from 'types/interfaces';
import SelectorInput from './selectorInput';

function RadioInput({ register, name, label }: IRadioInputProps) {
  return (
    <label className="form-label">
      {label}
      <div className="form-input-container">
        <SelectorInput
          register={register}
          name={name}
          className="form-input-radio"
          id="male"
          value="male"
          type="radio"
        />
        <SelectorInput
          register={register}
          name={name}
          className="form-input-radio"
          id="female"
          value="female"
          type="radio"
        />
      </div>
    </label>
  );
}

export default RadioInput;
